import { SlashCommandBuilder, Message, PermissionFlagsBits } from "discord.js";
import { colors, emojis } from "../../../constants/global";

export default {
	data: new SlashCommandBuilder()
		.setName("play")
		.setDescription("Ready up!")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
	async execute(interaction: any) {
		const { user, channel, guild } = interaction;
	},
};
