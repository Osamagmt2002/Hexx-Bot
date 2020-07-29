const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class WebhookCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'webhook',
			group: 'fun',
			memberName: 'webhook',
			description: 'Sends a webhook message.',
      args: [
          {
			      key: 'webhook',
			      prompt: 'What is the channel id where you want to send the message?',
			      type: 'integer',
		    },
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
            type: 'integer',
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

	async run(message, { webhook, token, id, username, image, hex }) {
    const channel = this.client.channels.cache.get(webhook);
    const embed = new Discord.MessageEmbed()
	    .setTitle('Some Title')
	    .setColor(hex);
	try {
		const webhooks = await channel.fetchWebhooks();
		const webhook = webhooks.first();

		await webhook.send('Message', {
			username: username,
			avatarURL: image,
			embeds: [embed],
		});
	} catch (error) {
		console.error('Error trying to send: ', error);
	}
  }
};