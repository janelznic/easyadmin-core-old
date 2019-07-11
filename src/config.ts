import * as dotenv from 'dotenv';
import * as fs from 'fs';

const envConfigFilePath: string = `${process.cwd()}/config/.env`;

// Check if the config file exists
if (!fs.existsSync(envConfigFilePath)) {
  throw new Error(
    'You have to install this application first with bin/install.sh script'
  );
}

dotenv.config({ path: envConfigFilePath });

export default {
  ENV: process.env.APP || 'development',
  PORT: process.env.PORT || '3000',

  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USERNAME: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'aaa',
  DB_DATABASE: process.env.DB_NAME || 'test'
};
