import handle from "./handle.js";

export default async function(client) {
    await handle('events', async path => {
        const eventName = path.split('.js').shift().split('/').pop(),
        eventCode = await import(path);
        client.on(eventName.toUpperCase(), eventCode.default.bind(null, client));
    });
};