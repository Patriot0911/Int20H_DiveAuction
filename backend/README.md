## Getting started

### Requirments:
- Node.js (18v or later)
- PostgresSQL (15v or later)

### Setting environment variables:
```shell
# .env.development

# Database
DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DEV_DATABASE>"

# Session
SESSION_SECRET="<MIN_32_BIT_TOKEN>"

# OAuth2
GOOGLE_CLIENT_ID="<KEY>"
GOOGLE_CLIENT_SECRET="<SECRET>"
GOOGLE_CALLBACK_URL="<PROTOCOL>://<HOST>:<PORT>/api/auth/callback/google"

# .env.test

# Database
DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<TEST_DATABASE>"

# Session
SESSION_SECRET="<MIN_32_BIT_TOKEN>"

# OAuth2
GOOGLE_CLIENT_ID="<KEY>"
GOOGLE_CLIENT_SECRET="<SECRET>"
GOOGLE_CALLBACK_URL="<PROTOCOL>://<HOST>:<PORT>/api/auth/callback/google"
```

### Installing dependencies:
```shell
npm i
```

### Run migrations:
```shell
npm run migrate:dev

npm run migrate:test
```

### Startup:
```shell
npm run start:prod # - start in production

npm run start:dev # - start in development mode

npm test # - run unit test

npm run test:e2e # - run e2e tests
```
