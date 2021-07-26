import handle from './utils/loaders/handle.js';

export default async function(client) {
  await handle('commands', async path => {
    const commandName = path.split('/').pop().split('.')[0],
          commandCode = await import(path);
    client.commands.set(commandName, commandCode.default);
  });
};
