import { SlashCommandBuilder, Message, PermissionFlagsBits } from "discord.js";
import { colors, emojis } from "../../../constants/global";

export default {
	data: new SlashCommandBuilder()
		.setName("duck")
		.setDescription("take cover behind a snow fort for 1 minute!")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
	async execute(interaction: any) {
		const { user, channel, guild } = interaction;
	},
};
