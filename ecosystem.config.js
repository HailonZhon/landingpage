module.exports = {
  apps: [
    {
      name: 'landingpage',
      script: 'npm',
      args: 'start',
      cwd: __dirname,
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
      watch: false,
      ignore_watch: ['node_modules', 'logs'],
    },
    {
      name: 'landingpage-dev',
      script: 'npm',
      args: 'run dev',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development',
      },
      watch: true,
      ignore_watch: ['node_modules', 'logs'],
    },
  ],
};
