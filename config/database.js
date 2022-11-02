module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'containers-us-west-91.railway.app'),
        port: env.int('DATABASE_PORT', 5773),
        database: env('DATABASE_NAME', 'railway'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'JWvzYWxuhMq11z7O5gEu'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
