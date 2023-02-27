import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  service: {
    path: process.env.SERVICE_PATH,
  },
  log: {
    level: process.env.LOG_LEVEL,
    file: process.env.LOG_FILE,
  },
  grpc: {
    bind: process.env.GRPC_BIND,
  }
};