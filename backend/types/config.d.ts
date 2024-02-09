export interface ServerConfig {
  port: string;
  prefix: string;
  cors: {
    origin: string;
    allowedHeaders: string[];
    allowedMethods: string;
  };
}
