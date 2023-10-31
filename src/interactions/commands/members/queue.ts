import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
import { colors, emojis } from "../../../constants/global";

import MessageQueue from "../../../constants/MQ";
import MQ from "../../../MQ/connect";

export default {
	data: new SlashCommandBuilder()
		.setName("queue")
		.setDescription("View current queue status")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
	async execute(interaction: any) {
		const queue = MessageQueue.queue;
		const mq = await MQ.getInstance();

		mq.sendToQueue(queue, "queue");
		mq.receive(queue, async (msg) => {
			if (msg) {
				console.log(msg.content.toString());
				await mq.removeMessage(msg);
			}
		});

		await interaction.reply({ content: "Queue status" });
	},
};
