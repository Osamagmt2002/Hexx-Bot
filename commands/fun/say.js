const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			group: 'fun',
			memberName: 'say',
			description: 'Says what you would like.',
      args: [
          {
			      key: 'texts',
			      prompt: 'What text would you like me to say?',
			      type: 'string',
		    },
      ]
		});
	}

	run(message, { texts }) {
    message.channel.send(`${texts}`)
  }
};