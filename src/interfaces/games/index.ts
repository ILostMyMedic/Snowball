import IMembers from "../members";

export const enum Team {
	rudolph = "Rudolph",
	elves = "Elves",
	snowman = "Snowman",
	santa = "Santa",
}

export interface ITeam {
	team: Team;
	members: IMembers[];
	hits: number;
	misses: number;
	throws: number;
	maxPlayers: number;
	minPlayers: number;
	ready: boolean;
}

export default interface IGame {
	guildIds: string[];
	teams: ITeam[];
	channelIds: string[];
	winner: Team;
	loser: Team;

	snowballCooldown: number;

	started: boolean;
	ended: boolean;
	timeStarted: number;
	timeEnded: number;
}

export interface IMatchmaking {
	guildId: string;
	channelId: string;
	team: Team;
	member: IMembers;
}
