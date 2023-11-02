import { Request, Response } from "express";
import StatusCodes from "../../../constants/statusCodes";
import Database from "../../../database";

export default async function (req: Request, res: Response) {
	try {
		const Queue = await Database.getCount("queue");

		res.status(StatusCodes.OK).send({
			count: Queue,
		});
	} catch (err: any) {
		res.status(StatusCodes.BadRequest).send(err.message);
	}
}
