import { Events, Message, Guild, GuildMember } from "discord.js";
import detectAndTranslate from "../../../functions/translate.filter";
import profanityFilter from "../../../functions/profanity.filter";

import { guildResolvers } from "../../../database/resolvers";
export default {
	name: Events.MessageCreate,
	once: false,
	execute: async (message: Message) => {
		// not a bot
		if (message.author.bot) return;
		// not DM
		if (!message.guild) return;
		guildResolvers.storeGuild(message.guild);

		const translated = await detectAndTranslate(message.content);
		const profanity = await profanityFilter(translated);

		// reply
		await message.reply({ content: profanity });
	},
};
