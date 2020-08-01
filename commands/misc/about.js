const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class AboutCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'misc',
            memberName: 'about',
            description: 'Sends information about the bot.',
        });    
    }

    run(message) {
      const embedMessage = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('About')
        .setAuthor(message.member.user.username, message.member.user.avatarURL())
        .setDescription('Sends information about the bot.')
        .setThumbnail(message.member.user.avatarURL())
        .addFields(
          { name: 'Discord.js Version:', value: '12.2.0' },
          { name: 'Discord.js-Commando Name:', value: 'discordjs/Commando'},
          { name: 'Node.js Version:', value: '12.x'},
         )
        .setImage(message.member.user.avatarURL())
        .setTimestamp()
        .setFooter(message.member.user.username, message.member.user.avatarURL());
      
      message.channel.send(embedMessage);
    }
};