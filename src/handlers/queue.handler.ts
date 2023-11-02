import { IQueue } from "../interfaces/games";
import { IMember } from "../interfaces/members";

export default class Queue {
	private static instance: Queue;
	private queue: Map<string, IQueue>;

	private constructor() {
		this.queue = new Map();
	}

	// Get Instance
	static getInstance(): Queue {
		if (!Queue.instance) {
			Queue.instance = new Queue();
		}
		return Queue.instance;
	}

	// get Queue
	public static getQueue(): IQueue | undefined {
		const queue = Queue.getInstance().queue.values().next().value;
		return queue;
	}

	// Add Guild to Queue
	public static addGuild(guildId: string, channelId: string) {
		const queue: IQueue = {
			guildId,
			channelId,
			players: [],
		};
		Queue.getInstance().queue.set(guildId, queue);
	}

	// Remove Guild from Queue
	public static removeGuild(guildId: string) {
		Queue.getInstance().queue.delete(guildId);
	}

	// Add Player to Queue
	static addPlayer(guildId: string, player: IMember, channelId?: string) {
		const queue = Queue.getInstance().queue.get(guildId);
		if (queue) {
			queue.players.push(player);
		} else {
			Queue.addGuild(guildId, channelId ? channelId : "");
			Queue.addPlayer(guildId, player);
		}
	}

	// Remove Player from Queue
	public static removePlayer(guildId: string, playerId: string) {
		const queue = Queue.getInstance().queue.get(guildId);
		if (queue) {
			const index = queue.players.findIndex(
				(player) => player.id === playerId
			);
			if (index !== -1) {
				queue.players.splice(index, 1);
			}
		}
	}
}
