import { SlashCommandBuilder, Message, PermissionFlagsBits } from "discord.js";
import { colors, emojis } from "../../../constants/global";

export default {
	data: new SlashCommandBuilder()
		.setName("invite")
		.setDescription("Create a invite to your team!")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
	async execute(interaction: any) {
		const { user, channel, guild } = interaction;
	},
};
