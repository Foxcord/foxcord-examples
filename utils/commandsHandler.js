import handleFunction from './handleFunction.js'

export default async function(client) {
  await handleFunction('commands', async path => {
    const commandeName = path.split('/').pop().split('.')[0],
          commandCode = await import(path);
    client.commands.set(commandName, commandCode.default);
  });
};
