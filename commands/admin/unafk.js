const { Command } = require('discord.js-commando');

module.exports = class AFKCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'unafk',
			group: 'admin',
			memberName: 'unafk',
			description: 'You stop being afk with this command. Can be used by anyone.',
		});
	}

	async run(message) {
		await message.member.setNickname(`${message.author.tag}`);
    message.channel.send(message.author.tag + " is not afk anymore.")
  }
};