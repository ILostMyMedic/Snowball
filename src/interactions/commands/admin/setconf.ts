import {
	SlashCommandBuilder,
	Message,
	PermissionFlagsBits,
	EmbedBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
} from "discord.js";
import { colors, emojis } from "../../../constants/global";

export default {
	data: new SlashCommandBuilder()
		.setName("setconf")
		.setDescription("Set the configuration for the snowball fight game!")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(interaction: any) {
		interaction.reply({
			content: "This command is not yet implemented!",
			ephemeral: true,
		});
	},
};
