const WebSocket = require('ws');
const fs = require('fs');
const wss = new WebSocket.Server({port: 20375});

wss.on('connection', function connection(ws) {
    sendMessage(ws);
});

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function sendMessage(ws) {
    for (let i = 1; i < 334; i++) {
        ws.send(fs.readFileSync(`data/output_${i.toString().padStart(4, '0')}.png`));
        await sleep(100);
    }
}
