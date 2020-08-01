const { Command } = require('discord.js-commando');
const db = require('quick.db');
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
    const afk = db.get(`afk_${message.guild.id}_${message.author.id}`)
    
    if(afk === 1) {
		  await message.member.setNickname(`${message.author.tag}`);
      message.channel.send(message.author.tag + " is not afk anymore.")
      db.delete(`afk_${message.guild.id}_${message.author.id}`)
    }
    if(afk === null) {
      message.channel.send('You are not AFK!')
    }
  }
};