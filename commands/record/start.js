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

    run(msg) {
      function generateOutputFile(channel, member) {
        // use IDs instead of username cause some people have stupid emojis in their name
        const fileName = `./recordings/${channel.id}-${member.id}-${Date.now()}.pcm`;
        return fs.createWriteStream(fileName);
      }
      let [command, ...channelName] = msg.content.split(" ");
    if (!msg.guild) {
      return msg.reply('No private service is available in your area at the moment. Please contact a service representative for more details.');
    }
    const voiceChannel = msg.guild.channels.find("Record", channelName.join(" "));
    //console.log(voiceChannel.id);
    if (!voiceChannel || voiceChannel.type !== 'voice') {
      return msg.reply(`I couldn't find the channel ${channelName}. Can you spell?`);
    }
    voiceChannel.join()
      .then(conn => {
        msg.reply('ready!');
        // create our voice receiver
        const receiver = conn.createReceiver();

        conn.on('speaking', (user, speaking) => {
          if (speaking) {
            msg.channel.sendMessage(`I'm listening to ${user}`);
            // this creates a 16-bit signed PCM, stereo 48KHz PCM stream.
            const audioStream = receiver.createPCMStream(user);
            // create an output stream so we can dump our data in a file
            const outputStream = generateOutputFile(voiceChannel, user);
            // pipe our audio data into the file stream
            audioStream.pipe(outputStream);
            outputStream.on("data", console.log);
            // when the stream ends (the user stopped talking) tell the user
            audioStream.on('end', () => {
              msg.channel.sendMessage(`I'm no longer listening to ${user}`);
            });
          }
        });
      })
    }
};