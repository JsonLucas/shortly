import pg from 'pg';
import { dbStringConnection } from '../utils/environment.js';

const { Pool } = pg;
const dbConnection = new Pool({
    connectionString: dbStringConnection, 
    ssl: {
        rejectUnauthorized: false
    }
});

export default dbConnection;