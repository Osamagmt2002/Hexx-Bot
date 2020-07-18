const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'misc',
            memberName: 'invite',
            description: 'Sends support server invite link in embed form.',
        });    
    }

    run(msg, args) {
    msg.channel.send(`My support server is https://discord.gg/YHTRn2N ,\nWhenever you need help, join that server and use Hexx Modmail or the support channel.`)
            
    }
};