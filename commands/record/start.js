const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = class StartCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'start',
            group: 'record',
            memberName: 'start',
            description: 'Starts recording your beautiful voice!',
        });    
    }

    async run(message) {
      this.voiceChannel = await message.member.voice.channel.join()
        this.reciever = this.voiceChannel.receiver
        this.voiceChannel.on('debug', (debug) => {
            let packet = JSON.parse(debug.slice(8))
            console.log(packet.op)

            if(!packet.d || packet.d && packet.d.speaking != 1) return;
            let user = this.client.users.resolve(packet.d.user_id)
            if(packet.d.speaking) {
                let userStream = this.reciever.createStream(user, {mode: 'pcm', end: 'manual'})
                let writeStream = require('fs').createWriteStream('./recording.pcm', {})
                this.us = userStream
                this.ws = writeStream

                this.us.on("data", (chunk) =>{
                    console.log(chunk)
                    this.us.pipe(this.ws)
                })
                this.ws.on("pipe", console.log)
            }
        })
    }
};