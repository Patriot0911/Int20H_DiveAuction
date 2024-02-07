## Getting started

### Requirments:
- Node.js (18v or later)
- PostgresSQL (15v or later)

### Setting environment variables:
```shell
# .env.development

# Database
DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DEV_DATABASE>"

# .env.test

# Database
DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<TEST_DATABASE>"
```

### Installing dependencies:
```shell
npm i
```

### Startup:
```shell
npm run start:prod # - start in production

npm run start:dev # - start in development mode

npm test # - run unit test

npm run test:e2e # - run e2e tests
```
