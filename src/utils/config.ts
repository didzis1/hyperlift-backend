import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

let determineMongoUri;

if (process.env.NODE_ENV == 'test') {
  determineMongoUri = process.env.MONGODB_URI_TEST;
} else {
  determineMongoUri = process.env.MONGODB_URI;
}

export const MONGODB_URI = determineMongoUri;
