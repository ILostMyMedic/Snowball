import { SlashCommandBuilder, Message, PermissionFlagsBits } from "discord.js";
import { colors, emojis } from "../../../constants/global";

export default {
	data: new SlashCommandBuilder()
		.setName("create")
		.setDescription("Create a game between specific servers!")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(interaction: any) {
		const { user, channel, guild } = interaction;
	},
};
