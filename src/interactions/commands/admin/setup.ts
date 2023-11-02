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
		.setName("snowconf")
		.setDescription("Configure the snowball fight game!")
		// default permissions for everyone
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(interaction: any) {
		// create a embed with buttons for enabling/disabling game settings.
		const embed = new EmbedBuilder()
			.setTitle("Snowball Fight Configuration")
			.setDescription(
				`
				**Enabled**: ${emojis.success}
				**Disabled**: ${emojis.error}
				
				**Cross server**: ${emojis.success}
				**Same server**: ${emojis.error}
				**Invite only**: ${emojis.error}

				**Max players**: 6
				**Min players**: 2
				**Max teams**: 2 *This is ignored if cross server is enabled*

				**Channel categories**: \`snowball-fight\`
				**Rudolph channel**: <@&${interaction.guild.roles.everyone.id}>
				**Elves channel**: <@&${interaction.guild.roles.everyone.id}>
				**Snowman channel**: <@&${interaction.guild.roles.everyone.id}>
				**Santa channel**: <@&${interaction.guild.roles.everyone.id}>
			`
			)
			.setColor(colors.success as any);

		// create the buttons
		const buttons = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId("enable")
				.setLabel("Enable")
				.setStyle(ButtonStyle.Primary)
				.setEmoji(emojis.success),
			new ButtonBuilder()
				.setCustomId("disable")
				.setLabel("Disable")
				.setStyle(ButtonStyle.Danger)
				.setEmoji(emojis.error)
		);

		// send the embed with buttons
		// await interaction.reply({
		// 	embeds: [embed],
		// 	components: [buttons],
		// });

		interaction.reply({
			content: "This command is not yet implemented!",
			ephemeral: true,
		});
	},
};
