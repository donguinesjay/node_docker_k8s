module.exports = {
  apps: [{
    name: 'express-app',
    script: 'app.js',
    instances: 'max', // Runs maximum possible instances for the CPU count
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production'
    }
  }]
}