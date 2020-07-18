const { Command } = require('discord.js-commando');

module.exports = class KillCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'kill',
			group: 'fun',
			memberName: 'kill',
			description: 'Kills people!',
      args: [
          {
			      key: 'user',
			      prompt: 'Who would you like to murder?',
			      type: 'string',
		    },
      ]
		});
	}

	run(message, { user }) {
    message.reply(`Killed ${user}!`)
    message.channel.send(`${user}, your dead forever.`, { files: ["https://media.giphy.com/media/PnhOSPReBR4F5NT5so/giphy.gif"] });
  }
};