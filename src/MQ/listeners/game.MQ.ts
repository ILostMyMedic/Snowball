import MessageQueue from "../../constants/MQ";
import MQ from "../../MQ/connect";
import logger from "../../utils/logger";

async function getQueue() {
	const queue = MessageQueue.queue;
	const mq = await MQ.getInstance();

	mq.receive(queue, async (msg) => {
		if (msg) {
			console.log(msg.content.toString());
			await mq.sendToQueue(queue, "queue");
			await mq.removeMessage(msg);
		}
	});
}

export default async function gameListeners() {
	await getQueue();
}
