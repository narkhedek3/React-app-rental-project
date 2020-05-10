

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // to enable CORS using proxy 
  // now we can make request from development server to node server.
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changedOrigin: true 
    })
  );
}