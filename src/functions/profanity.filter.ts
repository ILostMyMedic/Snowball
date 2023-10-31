import profanity from "../data/profanity";

const replacements = [
	"Christmas",
	"Winter",
	"Snow",
	"Santa",
	"Reindeer",
	"Elves",
	"Snowman",
	"Frosty",
	"North Pole",
	"Gifts",
	"Presents",
	"Toys",
	"Sleigh",
	"Mistletoe",
	"Candy Cane",
	"Gingerbread",
	"Cookies",
	"Milk",
	"Hot Chocolate",
	"Christmas Tree",
	"Lights",
	"Fireplace",
	"Chimney",
	"Snowball",
	"Snowflake",
	"Icicle",
	"Snow Angel",
];

export default function profanityFilter(input: string): string {
	let output = input;
	// replace every word of input that can be found in profanity with a random replacement
	for (const word of input.split(" ")) {
		if (profanity.includes(word.toLowerCase())) {
			const replacement =
				replacements[Math.floor(Math.random() * replacements.length)];
			output = output.replace(word, replacement);
		}
	}

	return output;
}
