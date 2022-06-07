import pg from 'pg';
import { dbHost, dbNane, dbPassword, dbPort, dbStringConnection, dbUsername } from '../utils/environment.js';

const { Pool } = pg;
const dbConnection = new Pool({
    host: dbHost,
    user: dbUsername,
    password: dbPassword,
    port: dbPort,
    database: dbNane,
    connectionString: dbStringConnection
});

export default dbConnection;