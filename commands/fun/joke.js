const { Command } = require('discord.js-commando');
var 

module.exports = class NukeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'joke',
			group: 'fun',
			memberName: 'joke',
			description: 'Gives you a random joke.',
		});
	}

	run(message, { user }) {
    message.reply(`Nuked ${user}!`)
    message.channel.send(`${user}, you have been nuked by ${message.author}.`, { files: ["https://media.giphy.com/media/XrNry0aqYWEhi/giphy.gif"] });
  }
};