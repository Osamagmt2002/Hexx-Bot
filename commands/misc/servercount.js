const { Command } = require('discord.js-commando');
const RichEmbed = require('discord.js');

module.exports = class ServerCountCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'servercount',
            group: 'misc',
            memberName: 'servercount',
            description: 'Shows the server count in embed form.',
        });    
    }

    run(msg, args) {
        const scount = this.client.guilds.cache.size;
        msg.channel.send(`I am in ${scount} servers!`)
    }
};