import { IMember } from "../members";
// possible team names
export const enum Team {
	rudolph = "Rudolph",
	elves = "Elves",
	snowman = "Snowman",
	santa = "Santa",
}
// teams
export interface ITeam {
	team: Team;
	members: IMember[];
	hits: number;
	misses: number;
	throws: number;
	maxPlayers: number;
	minPlayers: number;
	ready: boolean;
}
// started game
export interface IGame {
	guildIds: string[];
	teams: ITeam[];
	channelIds: string[];
	winner: Team | null;
	loser: Team | null;

	snowballCooldown: number;

	started: boolean | null;
	ended: boolean | null;
	timeStarted: number | null;
	timeEnded: number | null;
}
// queue
export interface IGuildQueue {
	guildId: string;
	channelId: string;
	members: IMember[];
}
