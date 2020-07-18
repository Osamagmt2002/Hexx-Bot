const { Command } = require('discord.js-commando');

module.exports = class MemeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'meme',
			group: 'fun',
			memberName: 'meme',
			description: 'Gives you a random meme.',
		});
	}

	run(message) {
    const memes = [
      'https://cdn.discordapp.com/attachments/729711799930454069/729723758532624444/image.png',
      'https://cdn.discordapp.com/attachments/729711799930454069/729722580667465768/hqdefault.png',
      'https://cdn.discordapp.com/attachments/729711799930454069/729722254711193631/b914397520c2334da95a4dfbdd60200b.png',
      'https://cdn.discordapp.com/attachments/729711799930454069/729721921176076288/9a2.png',
      'https://cdn.discordapp.com/attachments/729711799930454069/729721655194157107/fetchimage.png',
      'https://cdn.discordapp.com/attachments/729711799930454069/729721544321794068/205-2059748_patrick-patrickstar-spongebob-pinhead-orange-black-patrick-star.png',
      'https://cdn.discordapp.com/attachments/729711799930454069/729721105165582346/images.png',
      'https://cdn.discordapp.com/attachments/729711799930454069/729720817956421653/naruto-run.png',
      'https://cdn.discordapp.com/attachments/729711799930454069/729720645402755192/hqdefault.png'
    ]
    var output = memes[Math.floor(Math.random()*memes.length)];
    message.channel.send(`Here is your meme!`, { files: [output]})
  }
};