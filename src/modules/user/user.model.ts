import { Sequelize } from 'sequelize';
import db from '../../db/mysql/mysql';

const UserModel = db.define('user', {
  id: {
    type: Sequelize.BIGINT(20),
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING(60),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  firstname: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: ''
  },
  lastname: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: ''
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true
  },
  authority: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  },
  registered: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  last_login: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  }},
  {
    underscored: true,
    timestamps: false,
    createAt: false,
    paranoid: true
  }
);

export default UserModel;
