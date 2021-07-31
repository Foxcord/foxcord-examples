const { Client, Collection } = require('foxcord');
const { TOKEN } = require('./utils/config.js');
const commandsLoader = require('./utils/loaders/commandsLoader.js');
const eventsLoader = require('./utils/loaders/eventsLoader.js');

const CLIENT = new Client({
  device: 'MOBILE',
  intents: ['ALL'],
  reconnect: true
});

['commands', 'cooldowns'].forEach(e => CLIENT[e] = new Collection());

commandsLoader(CLIENT);
eventsLoader(CLIENT);

CLIENT.connect(TOKEN);
