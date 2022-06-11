import pg from 'pg';
import { dbHost, dbNane, dbPassword, dbPort, dbStringConnection, dbUsername } from '../utils/environment.js';

const { Pool } = pg;
const dbConnection = new Pool({
    connectionString: dbStringConnection, 
    host: dbHost,
    database: dbNane,
    user: dbUsername,
    password: dbPassword,
    port: dbPort
});
/*ssl: {
    rejectUnauthorized: false
}*/
export default dbConnection;