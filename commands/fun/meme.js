const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports = class MemeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'meme',
			group: 'fun',
			memberName: 'meme',
			description: 'Gives you a random meme.',
		});
	}

async run(message, args) {
    const member = args.member;
    const channel = message.channel
    const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.MessageEmbed()
        embed.setColor('#ff0000')
        embed.setTitle(allowed[randomnumber].data.title)
        embed.setDescription("Posted by: " + allowed[randomnumber].data.author)
        embed.setImage(allowed[randomnumber].data.url)
        embed.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        embed.setFooter("Memes provided by r/dankmemes");
        message.channel.send(embed)
  }
};