import { Request, Response } from "express";
import StatusCodes from "../../../constants/statusCodes";
import { IGuildQueue } from "../../../interfaces/games";
import { IMember } from "../../../interfaces/members";
import Database from "../../../database";

export default async function (req: Request, res: Response) {
	try {
		const { guildId, userId, displayName, channelId } = req.body;

		const Member = {
			id: userId,
			hits: 0,
			misses: 0,
			throws: 0,
		} as IMember;
		const Queue = {
			guildId: guildId,
			channelId: channelId,
			members: [Member],
		} as IGuildQueue;

		const queue = await Database.read("queue", guildId);
		if (queue) {
			const members = queue.members as IMember[];
			const member = members.find((member) => member.id === userId);

			if (member && members.length > 1) {
				Database.removeMemberFromQueue(guildId, userId, "queue");
			} else if (member && members.length === 1) {
				Database.delete("queue", guildId);
			}
		}

		res.status(StatusCodes.OK).send();
	} catch (err: any) {
		res.status(StatusCodes.BadRequest).send(err.message);
	}
}
