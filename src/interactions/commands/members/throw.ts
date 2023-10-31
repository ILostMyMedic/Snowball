import {
	SlashCommandBuilder,
	PermissionFlagsBits,
	EmbedBuilder,
} from "discord.js";
import { colors, emojis } from "../../../constants/global";

export default {
	data: new SlashCommandBuilder()
		.setName("throw")
		.setDescription("throw a snowball at someone!")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
	async execute(interaction: any) {
		const { user, channel, guild } = interaction;
		const displayName =
			guild.members.cache.get(user.id)?.displayName ?? user.username;

		// 35% chance to hit
		const hit = Math.random() > 0.5;

		const embed = new EmbedBuilder()
			.setDescription(
				`${emojis.snowball} **${displayName}** threw a snowball! ${
					hit ? "It hit!" : "It missed!"
				}`
			)
			.setColor(hit ? (colors.hit as any) : (colors.miss as any));

		// reply to interaction
		await interaction.reply({
			embeds: [embed],
			// ephemeral: true,
		});
	},
};
