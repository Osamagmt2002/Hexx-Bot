const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
var money = require('discord-money');

module.exports = class AddCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'add',
			group: 'economy',
			memberName: 'add',
			description: 'Gives you as much as you want (administrator only).',
      userPermissions: ['ADMINISTRATOR'],
      args: [
        {
          key: 'wanted',
          prompt: 'How much money do you want to add to your balance?',
          type: 'integer',
        }
      ]
		});
	}
  
  run(message, { wanted }) {
    money.updateBal(message.author.id, wanted).then((i) => {
      message.channel.send({embed: {
        color: 3447003,
        description: `Received your **$${wanted}.** I think you should check \`r!balance\`.`,
        author: {
          name: `${message.author.username}#${message.author.discriminator}`,
          icon_url: message.author.avatarURL 
        }
      }});
    })
  }
};