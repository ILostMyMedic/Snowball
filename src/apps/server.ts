import express, { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import env from "../utils/env.process";
import StatusCodes from "../constants/statusCodes";
import ApiUsageMiddleware from "../API/middleware/apiUsage";
import { router } from "../API";

export default class ServerClient {
	private static instance: ServerClient;
	private app: express.Application;
	private port: number | string;

	constructor() {
		this.app = express();
		this.port = env.port;
	}

	public start() {
		// logger.server("⏳ Starting server...");
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		this.app.use(ApiUsageMiddleware);

		this.app.use(router);

		this.app.use(this.errorHandler);

		this.app.listen(this.port, () => {
			logger.server(`🚀 Server started on port ${this.port}`);
		});
	}

	public static getInstance(): ServerClient {
		if (!ServerClient.instance) {
			ServerClient.instance = new ServerClient();
		}

		return ServerClient.instance;
	}

	private errorHandler(
		error: any,
		req: Request,
		res: Response,
		next: NextFunction
	) {
		logger.error(error);

		res.status(StatusCodes.InternalServerError).send({
			message: error.message,
		});
	}
}
