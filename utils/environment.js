import 'dotenv/config.js';

//database
export const dbStringConnection = process.env.DB_CONNECTION;
export const dbUsername = process.env.USERNAME;
export const dbPassword = process.env.PASSWORD;
export const dbPort = process.env.DB_PORT;
export const dbNane = process.env.DB_NAME;
export const dbHost = process.env.HOST;

//server
export const serverPort = process.env.PORT || 5000;