export default () => ({
  server: {
    port: process.env.PORT ?? '8000',
    prefix: '/api',
    cors: {
      origin: '*',
      allowedHeaders: [
        'Content-Type',
        'Upgrade',
        'Connection',
        'Origin',
        'Authorization',
      ],
      allowedMethods: '*',
    },
  },
});
