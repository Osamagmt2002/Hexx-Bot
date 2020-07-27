const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = class StopCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            group: 'record',
            memberName: 'stop',
            description: 'Stops recording.',
        });    
    }

    run(msg) {
      function generateOutputFile(channel, member) {
        // use IDs instead of username cause some people have stupid emojis in their name
        const fileName = `./recordings/${channel.id}-${member.id}-${Date.now()}.pcm`;
        return fs.createWriteStream(fileName);
      }
      let [command, ...channelName] = msg.content.split(" ");
      let voiceChannel = msg.guild.channels.find("Record", channelName.join(" "));
      voiceChannel.leave();
      
    }
};