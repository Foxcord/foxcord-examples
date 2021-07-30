import handle from './handle';

export default async function(client) {
  await handle('events', async path => {
    const eventName = path.split('/').pop().split('.')[0].toUpperCase(),
          eventCode = await import(path);
    client.on(eventName, eventCode.default.bind(client));
  });
};
