module.exports = {
  apps: [
    {
      name: 'app',
      script: './server/server.js',
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
};
