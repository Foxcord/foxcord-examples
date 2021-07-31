import { Client, Collection } from 'foxcord';
import { TOKEN } from './utils/config.js';
import commandsLoader from './utils/loaders/commandsLoader.js';
import eventsLoader from './utils/loaders/eventsLoader.js';

const CLIENT = new Client({
  device: 'MOBILE',
  intents: ['ALL'],
  reconnect: true
});

['commands', 'cooldowns'].forEach(e => CLIENT[e] = new Collection());

commandsLoader(CLIENT);
eventsLoader(CLIENT);

CLIENT.connect(TOKEN);
