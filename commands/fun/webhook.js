const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const hookcord = require('hookcord');
const Hook = new hookcord.Hook()

module.exports = class WebhookCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'webhook',
			group: 'fun',
			memberName: 'webhook',
			description: 'Sends a webhook message.',
      args: [
          {
            key: 'token',
            prompt: 'What is the webhook token?',
            type: 'string',
          },
          {
            key: 'id',
            prompt: 'What is the webhook id?',
            type: 'integer',
          },
          {
            key: 'username',
            prompt: 'What do you want the webhook username to be?',
            type: 'string',
          },
          {
            key: 'image',
            prompt: 'What is the image link for the webhook?',
            type: 'string',
          },
          {
            key: 'hex',
            prompt: 'What is the hex color?',
            type: 'string',
          },
          {
            key: 'title',
            prompt: 'Lastly, what is the title of the embed message?',
            type: 'string',
          },
      ]
		});
	}

	run(message, { token, id, username, image, hex, title }) {
    Hook.login(id, token);
    Hook.setPayload({
      "embeds": [{
        "title": title,
        "color": hex,
        "fields": [
          {
            "name": "Field",
            "value": "Yes, I'm a field."
          }
        ]
      }]
    })
  }
};