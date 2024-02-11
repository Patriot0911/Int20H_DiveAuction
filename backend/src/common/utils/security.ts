import * as crypto from 'node:crypto';

interface DeserializedHash {
  params: crypto.ScryptOptions;
  salt: Buffer;
  hash: Buffer;
}

const SCRYPT_PARAMS: crypto.ScryptOptions = {
  N: 32768,
  r: 8,
  p: 1,
  maxmem: 64 * 1024 * 1024,
};
const SCRYPT_PREFIX = '$scrypt$N=32768,r=8,p=1,maxmem=67108864$';
const SALT_LEN = 32;
const KEY_LEN = 64;
const GEN_LENGTH = 16;

const serializeHash = (hash: Buffer, salt: Buffer): string => {
  const [saltString] = salt.toString('base64').split('=');
  const [hashString] = hash.toString('base64').split('=');
  return `${SCRYPT_PREFIX}${saltString}$${hashString}`;
};

const parseOptions = (options: string): crypto.ScryptOptions => {
  const values: [string, number][] = [];
  const items = options.split(',');
  for (const item of items) {
    const [key, val] = item.split('=');
    values.push([key, Number(val)]);
  }
  return Object.fromEntries(values);
};

const deserializeHash = (phcString: string): DeserializedHash => {
  const [, name, options, salt64, hash64] = phcString.split('$');
  if (name !== 'scrypt') {
    throw new Error('Node.js crypto module only supports scrypt');
  }
  const params = parseOptions(options);
  const salt = Buffer.from(salt64, 'base64');
  const hash = Buffer.from(hash64, 'base64');
  return { params, salt, hash };
};

export const hashPassword = (password: string): Promise<string> =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(SALT_LEN, (err, salt) => {
      if (err) {
        reject(err);
        return;
      }
      crypto.scrypt(password, salt, KEY_LEN, SCRYPT_PARAMS, (err, hash) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(serializeHash(hash, salt));
      });
    });
  });

export const validatePassword = (
  password: string,
  serHash: string,
): Promise<boolean> => {
  const { params, salt, hash } = deserializeHash(serHash);
  return new Promise((resolve, reject) => {
    const callback = (err: Error, hashedPassword: Buffer) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(crypto.timingSafeEqual(hashedPassword, hash));
    };
    crypto.scrypt(password, salt, hash.length, params, callback);
  });
};

export const generatePassword = (): Promise<{
  password: string;
  hash: string;
}> =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(GEN_LENGTH, (err, buf) => {
      if (err) {
        reject(err);
        return;
      }
      const password = buf.toString('hex');
      hashPassword(password).then((hash) => resolve({ password, hash }));
    });
  });
