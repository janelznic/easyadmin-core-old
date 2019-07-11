import { Sequelize } from 'sequelize';
import CONFIG from '../../config';

const db = new Sequelize(
  CONFIG.DB_DATABASE,
  CONFIG.DB_USERNAME,
  CONFIG.DB_PASSWORD,
  {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT,
    operatorsAliases: false
  }
);

export default db;
