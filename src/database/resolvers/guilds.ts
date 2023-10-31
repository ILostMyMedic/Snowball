import { Guild } from "discord.js";
import { IGuild } from "../../interfaces/guilds";
import Database from "../index";

const resolvers = {
	storeGuild: async (guild: Guild): Promise<void> => {
		await Database.write(
			{
				id: guild.id,
				memberCount: guild.memberCount,
			},
			"guilds",
			guild.id
		);
	},

	getGuild: async (guildId: string): Promise<IGuild | null> => {
		const guild = await Database.read("guilds", guildId);
		if (guild) {
			return {
				id: guild.id,
				memberCount: guild.memberCount,
			};
		}
		return null;
	},
};

export default resolvers;
