const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class SubCountCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'subc',
            group: 'misc',
            memberName: 'subc',
            description: 'Shows GenerationShops#9825\'s sub count.',
        });    
    }

    run(message, args) {
          var request = require('request')
          var id = 'UCY8L8VQGszBVLxdxjezu92g'
          var key = process.env.YT_KEY
    
          var url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=" + key;
    
          request({
            method: 'GET',
            url: url
          }, function (err, response, text) {
if(err) {
return
}
      
      var json = JSON.parse(text);
      var subc = json.items[0].statistics.subscriberCount
message.channel.send(`${subc} is how many subs that channel has!`)
      })
    }
};