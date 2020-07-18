const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class GroupCountCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'groupcount',
            group: 'misc',
            memberName: 'groupcount',
            description: 'Shows your group count.',
            args: [
              {
                key: 'groupid',
                prompt: 'What is the group id?',
                type: 'string',
              }
            ]
        });    
    }

    run(message, args, { groupid }) {
          var request = require('request')
          var url = "https://groups.roblox.com/v1/groups/" + groupid;
    
          request({
            method: 'GET',
            url: url
          }, function (err, response, text) {
if(err) {
return
}
      
      var json = JSON.decode(text);
      var gcount = json.items[0].memberCount
message.channel.send(`${gcount} is how many members are in your group!`)
      })
    }
};