import { randomUUID } from 'crypto';

export default () => ({
  session: {
    secret: process.env.SESSION_SECRET,
    cookie: {
      secure: false,
      domain: 'localhost',
      maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month
    },
    rolling: false,
    saveUninitialized: false,
    idGenerator: () => randomUUID(),
    cacheTimeout: 1000 * 60 * 60 * 1, // 1 day
  },
});
