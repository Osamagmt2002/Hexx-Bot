const { Command } = require('discord.js-commando');

module.exports = class LyricsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'lyrics',
			group: 'fun',
			memberName: 'lyrics',
			description: 'Searches for your lyrics desired.',
		});
	}

	run(message) {
const genius = require("genius-lyrics")
   const G = new genius.Client(process.env.GENIUS)
    
   G.tracks.search(message.content.split(' ').slice(1).join(' '), {limit: 1})
   .then(results => {
const song = results[0]
message.channel.send(`**${song.artist.name} - ${song.title}**\n<${song.url}>`) //song.lyrics
})
    .catch(err => message.reply(err))
  }
};