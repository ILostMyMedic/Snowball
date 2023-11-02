import {
	SlashCommandBuilder,
	PermissionFlagsBits,
	EmbedBuilder,
} from "discord.js";
import { colors, emojis } from "../../../constants/global";
import logger from "../../../utils/logger";

import axios from "axios";
import env from "../../../utils/env.process";

export default {
	data: new SlashCommandBuilder()
		.setName("leave")
		.setDescription("Leave the queue.")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
	async execute(interaction: any) {
		const { user, channel, guild } = interaction;

		const ErrorEmbed = new EmbedBuilder()
			.setColor(colors.error as any)
			.setDescription(`${emojis.error} Please try again later`);

		// const cooldown = `<t:${Math.floor(Date.now() / 1000) + 1800}:R>`;
		const SuccessEmbed = new EmbedBuilder()
			.setColor(colors.success as any)
			.setDescription(`${emojis.success} You have left the queue!`);

		try {
			axios.defaults.headers.common["Authorization"] = env.apiKey;
			const res = await axios.post(
				`http://localhost:${env.port}/game/leave`,
				{
					guildId: guild.id,
					userId: user.id,
					displayName: user.username,
					channelId: channel.id,
				}
			);

			if (res.status !== 200) {
				return await interaction.reply({
					embeds: [ErrorEmbed],
					ephemeral: true,
				});
			}
			return await interaction.reply({
				embeds: [SuccessEmbed],
				ephemeral: true,
			});
		} catch (err: any) {
			logger.error(err);
			return await interaction.reply({
				embeds: [ErrorEmbed],
				ephemeral: true,
			});
		}
	},
};
