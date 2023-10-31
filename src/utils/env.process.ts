import { config } from "dotenv";
config();

export default {
	token: process.env.TOKEN || "TOKEN",
	rabbitmq: process.env.RABBITMQ_URL || "amqp://localhost",
	mongoURI: process.env.MONGODB || "mongodb://localhost:27017",
};
