import logger from "../utils/logger";
import { MongoClient } from "mongodb";
import env from "../utils/env.process";

import { IGuildQueue } from "../interfaces/games";
import { IMember } from "../interfaces/members";
export default class Database {
	public static instance: Database | null = null;
	private static connection: MongoClient;

	public static getInstance() {
		if (!Database.instance) {
			const certificatePath = "./cert/snowball.pem";
			Database.instance = new Database();
			Database.connection = new MongoClient(env.mongoURI as string, {
				tlsCertificateKeyFile: certificatePath,
			});

			Database.connection.connect();
		}

		return Database.instance;
	}

	public static async write(data: object, collection: string, key?: string) {
		try {
			this.getInstance();

			// upsert
			await Database.connection
				.db("snowball")
				.collection(collection)
				.updateOne({ id: key }, { $set: data }, { upsert: true });

			this.disconnect();
		} catch (error) {
			logger.error(error);
		}
	}

	public static async read(collection: string, key: string) {
		try {
			this.getInstance();

			const data = await Database.connection
				.db("snowball")
				.collection(collection)
				.findOne({ id: key });

			this.disconnect();

			return data;
		} catch (error) {
			logger.error(error);
		}
	}

	public static async delete(collection: string, key: string) {
		try {
			this.getInstance();

			await Database.connection
				.db("snowball")
				.collection(collection)
				.deleteOne({ id: key });

			this.disconnect();
		} catch (error) {
			logger.error(error);
		}
	}

	public static async getCount(collection: string) {
		try {
			this.getInstance();

			const count = await Database.connection
				.db("snowball")
				.collection(collection)
				.countDocuments();

			this.disconnect();

			return count;
		} catch (error) {
			logger.error(error);
		}
	}

	/**
	 * Specific queries
	 */
	public static async addMemberToQueue(
		guildId: string,
		member: IMember,
		collection: string
	) {
		try {
			this.getInstance();

			// await Database.connection
			// 	.db("snowball")
			// 	.collection(collection)
			// 	.updateOne({ id: guildId }, { $push: { members: member } });

			// upsert with $addToSet
			await Database.connection
				.db("snowball")
				.collection(collection)
				.updateOne(
					{ id: guildId },
					{ $addToSet: { members: member } },
					{ upsert: true }
				);

			this.disconnect();
		} catch (error) {
			logger.error(error);
		}
	}
	public static async removeMemberFromQueue(
		guildId: string,
		memberId: string,
		collection: string
	) {
		try {
			this.getInstance();

			await Database.connection
				.db("snowball")
				.collection(collection)
				.updateOne(
					{ id: guildId },
					{ $pull: { members: { id: memberId } } }
				);

			this.disconnect();
		} catch (error) {
			logger.error(error);
		}
	}

	public static async disconnect() {
		await Database.connection.close();
		Database.instance = null;
	}
}
