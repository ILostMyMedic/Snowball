import logger from "../utils/logger";
import { MongoClient } from "mongodb";
import env from "../utils/env.process";

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

	public static async disconnect() {
		await Database.connection.close();
		Database.instance = null;
	}
}
