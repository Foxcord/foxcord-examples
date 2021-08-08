import { Client, Collection } from 'foxcord';
import commandsLoader from './utils/loaders/commandsLoader.js';
import eventsLoader from './utils/loaders/eventsLoader.js';
import { TOKEN } from './utils/config.js';
const CLIENT = new Client({ intents: ['ALL'], device: 'MOBILE', reconnect: true });

['commands', 'cooldowns'].forEach(x => CLIENT[x] = new Collection());

commandsLoader(CLIENT);
eventsLoader(CLIENT);

CLIENT.connect(TOKEN);