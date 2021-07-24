const { WebhookClient } = require('foxcord');

const webhookClient = new WebhookClient();

let webhookSettings = {
    url: 'some webhook URL',
    username: 'Captain Webhook',
    avatarURL: 'some cool image URL'
}

webhookClient.send('Cool message!', { ...webhookSettings }).then(async webhook => {
    await webhookClient.send(webhook.avatarURL(), { ...webhookSettings })
})