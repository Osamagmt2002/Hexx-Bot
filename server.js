const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const Discord = require('discord.js');
const token = process.env.TOKEN;

const client = new CommandoClient({
  commandPrefix: 'h!',
  unknownCommandResponse: false,
  owner: ['678941697488584734', '613364629464285316', '684519096788058145', '719252298811047936', '735261790363189321'],
  disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['admin', 'Admin-Only Commands'],
        ['misc', 'Important or Not-Important Stuff.'],
        ['fun', 'Fun Commands!'],
        ['economy', 'Money Commands!'],
        ['record', 'Recording Commands!']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`Logged in to ${client.user.tag}!`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers.`);
});

const db = require("quick.db") //using quick.db package

client.on("guildCreate", (guild) => {
  // This event triggers when the bot joins a guild
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.cache.size} servers.`);
  
  let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = client.channels.get(guild.systemChannelID || channelID);
    channel.send(`Hello! Don't forget to make a voice channel called **Record** when recording your voice!`);
});

client.on("guildDelete", (guild) => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.cache.size} servers.`);
});

client.on("guildMemberAdd", (member) => { //usage of welcome event
  let chx = db.get(`welchannel_${member.guild.id}`); //defining var
  
  if(chx === null) { //check if var have value or not
    return;
  }

  let wembed = new Discord.MessageEmbed() //define embed
  .setAuthor(member.user.username, member.user.avatarURL())
  .setColor("#00FF00")
  .setThumbnail(member.user.avatarURL())
  .setDescription(`We are very happy to have you in our server!`);
  
  client.channels.cache.get(chx).send(wembed) //get channel and send embed
})

client.on("guildMemberRemove", (member) => {
  let chx = db.get(`leavechannel_${member.guild.id}`);
  
  if(chx === null) {
    return;
  }
  
  let lembed = new Discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.avatarURL())
  .setColor("#ff2050")
  .setThumbnail(member.user.avatarURL())
  .setDescription(`${member} just left, how sad.`);
  
  client.channels.cache.get(chx).send(lembed)
})



client.login(token);