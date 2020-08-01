const { Command } = require('discord.js-commando');

module.exports = class AFKCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'afk',
			group: 'admin',
			memberName: 'afk',
			description: 'You become AFK for whatever reason. Can be used by anyone.',
      args: [
        {
          key: 'reason',
          prompt: 'Why do you want to be afk?',
          type: 'string',
        }
      ]
		});
	}

	run(message, { reason }) {
    message.reply(`Alright! You are now afk for ${reason}.`)
    message.member.setNickname(`AFK: ${message.author}`)
  }
};