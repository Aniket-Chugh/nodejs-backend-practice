const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.log(`Server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

    // To reply, we must specify the address and port explicitly every time
    server.send('Message Received', rinfo.port, rinfo.address);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`UDP Server listening ${address.address}:${address.port}`);
});

server.bind(41234);
