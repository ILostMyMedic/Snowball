const MessageQueue = {
	// commands
	throw: "throw", //throw a snowball

	queue: "queue", // current servers in queue

	// game
	hit: "hit", // hit a player with a snowball
	miss: "miss", // miss a player with a snowball
	matchmaking: "matchmaking", // start a matchmaking game
	leaderboard: "leaderboard", // show the leaderboard
	duck: "duck", // duck (cant throw but will give reduced hit chance)
	stand: "stand", // stand (can throw but will give increased hit chance) default

	// Players
	playerJoin: "playerJoin", // player joins a game
	playerLeave: "playerLeave", // player leaves a game
	playerKick: "playerKick", // player is kicked from a game
	playerReady: "playerReady", // player is ready to start a game
	playerVote: "playerVote", // player votes to kick another player
};

export default MessageQueue;

// usage
// import MessageQueue from "../constants/MQ";
// import MQ from "../MQ/connect";
// import logger from "../utils/logger";
//
// async function getQueue (queueName: string) {
//     const queue = MessageQueue["queue"];
