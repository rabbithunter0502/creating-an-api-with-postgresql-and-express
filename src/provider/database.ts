import * as dotenv from 'dotenv';
import { Pool, PoolConfig } from 'pg'
import { EnvConstant } from 'constants/env.constant';

dotenv.config();

const {
    APP_PORT,
    POSTGRES_HOST_ADDRESS,
    POSTGRES_DATABASE,
    POSTGRES_DATABASE_TEST,
    POSTGRES_USER,
    POSTGRES_PWD,
    POSTGRES_PORT,
    ENV
} = process.env

const poolConfig: PoolConfig = {
    host: POSTGRES_HOST_ADDRESS,
    user: POSTGRES_USER,
    password: POSTGRES_PWD,
    port: Number(POSTGRES_PORT),
}

switch (ENV) {
    case EnvConstant.ENV_TEST:
        poolConfig.database = POSTGRES_DATABASE_TEST;
        break;
    case EnvConstant.ENV_DEV:
        poolConfig.database = POSTGRES_DATABASE;
        break;
    default:
        poolConfig.database = POSTGRES_DATABASE;
        break;
}

const dbInstance = new Pool(poolConfig);

export default dbInstance;
