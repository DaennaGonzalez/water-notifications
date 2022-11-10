require('dotenv').config();

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.PGDATABASE,process.env.PGUSER,process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    pool: {
        max: 20,
        min: 0,
        require: 60000,
        idle: 10000,
        evict: 10000
    },
    logging: true,
    logging: console.log
  });

export default sequelize;