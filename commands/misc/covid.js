const fetch = require('node-fetch');
const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class CovidCommand extends Command {
  constructor(client) {
        super(client, {
          name: "covid",
          description: "Track a country or worldwide COVID-19 cases",
          memberName: "covid",
          group: "misc",
          });    
    }

    async run(message, args){
    }
};