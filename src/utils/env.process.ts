import { config } from "dotenv";
config();

export default {
	token: process.env.TOKEN || "TOKEN",
	rabbitmq: process.env.RABBITMQ_URL || "amqp://localhost",
	mongoURI: process.env.MONGODB || "mongodb://localhost:27017",
	port: process.env.PORT || 3000,
	apiKey: process.env.APIKEY || "",
	redis: {
		port: Number(process.env.REDIS_PORT) || 6379,
		host: process.env.REDIS_HOST || "localhost",
		password: process.env.REDIS_PASS || "",
		username: process.env.REDIS_USER || "",
	},
};
