const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
var money = require('discord-money');

module.exports = class BalanceCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'balance',
			group: 'economy',
			memberName: 'balance',
			description: 'Gives you your balance.',
		});
	}
  
  run(message) {
    money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
      message.channel.send(`**Balance:** ${i.money}`);
    })
  }
};