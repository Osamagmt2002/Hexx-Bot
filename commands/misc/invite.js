const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'misc',
            memberName: 'invite',
            description: 'Sends bot invite.',
        });    
    }

    run(message, args, { client }) {
      message.channel.send(`Link: https://discord.com/oauth2/authorize?client_id=729714988318720061&scope=bot&permissions=8`)
      message.channel.send('Use it to invite this bot.')
    }
};