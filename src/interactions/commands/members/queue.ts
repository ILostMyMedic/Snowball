import {
	SlashCommandBuilder,
	PermissionFlagsBits,
	EmbedBuilder,
} from "discord.js";
import { colors, emojis } from "../../../constants/global";
import env from "../../../utils/env.process";
import axios from "axios";

export default {
	data: new SlashCommandBuilder()
		.setName("queue")
		.setDescription("View current queue status")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
	async execute(interaction: any) {
		const { user, channel, guild } = interaction;

		try {
			axios.defaults.headers.common["Authorization"] = env.apiKey;
			const res = await axios.get(
				`http://localhost:${env.port}/game/queue`
			);

			const Embed = new EmbedBuilder()
				.setColor(colors.info as any)
				.setDescription(
					`${emojis.snowball} ${
						res.data.count > 0
							? `Current queue: **${res.data.count}**`
							: "Currently no queue going.\nJoin queue by typing </play:1168662207534469182>"
					}`
				);

			await interaction.reply({ embeds: [Embed] });
		} catch (err: any) {
			console.error(err);
			return await interaction.reply({
				content: "Something went wrong",
				ephemeral: true,
			});
		}
	},
};
