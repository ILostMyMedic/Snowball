import amqplib from "amqplib";
import env from "../utils/env.process";

interface ConsumeCallback {
	(message: amqplib.ConsumeMessage | null): void;
}

export default class MQ {
	private static instance: MQ;
	private static connection: amqplib.Connection;
	private static channel: amqplib.Channel;

	private constructor() {}

	public static async getInstance(): Promise<MQ> {
		if (!MQ.instance) {
			MQ.instance = new MQ();
			MQ.connection = await amqplib.connect(env.rabbitmq);
			MQ.channel = await MQ.connection.createChannel();
		}

		return MQ.instance;
	}

	public async sendToQueue(queue: string, message: string): Promise<void> {
		await MQ.channel.assertQueue(`${queue}-Engine`);
		await MQ.channel.sendToQueue(`${queue}-Engine`, Buffer.from(message));
	}

	public async receive(
		queue: string,
		callback: ConsumeCallback
	): Promise<void> {
		await MQ.channel.assertQueue(`${queue}-Client`);
		await MQ.channel.consume(`${queue}-Client`, callback);
	}

	public async close(): Promise<void> {
		await MQ.channel.close();
		await MQ.connection.close();
	}

	public async removeMessage(message: amqplib.ConsumeMessage): Promise<void> {
		await MQ.channel.ack(message);
	}
}
