import 'dotenv/config';

export const dbStringConnection = process.env.DATABASE_URL;
export const port = process.env.PORT || 5000;
export const jwtSecret = process.env.JWT_SECRET;