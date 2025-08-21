const dns = require('node:dns');

dns.lookup('facebook.com', (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
});
// address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6
