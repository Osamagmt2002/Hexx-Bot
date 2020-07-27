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

    run(message) {
      message.leaveVoiceChannel(message.author.voiceChannel);
    }
};