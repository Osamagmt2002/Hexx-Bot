const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class InviteServerCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'inviteserver',
            group: 'misc',
            memberName: 'inviteserver',
            description: 'Sends support server invite link.',
        });    
    }

    run(msg, args) {
    msg.channel.send(`My support server is https://discord.gg/YHTRn2N ,\nWhenever you need help, join that server and use Hexx Modmail or the support channel.`)
            
    }
};