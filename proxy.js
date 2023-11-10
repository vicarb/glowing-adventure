const httpProxy = require('http-proxy');
const logger = require('morgan');

const proxyServer = httpProxy.createProxyServer({
  target: 'http://localhost:3002',
});

// Add the Morgan logging middleware to the proxy server
proxyServer.use(logger('dev'));

proxyServer.listen(3001);