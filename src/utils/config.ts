require('dotenv').config();

const PORT = process.env.PORT;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

let MONGODB_URI: string;

if (process.env.NODE_ENV === 'TEST') {
  MONGODB_URI = process.env.MONGODB_URI_TEST as string;
} else if (process.env.NODE_ENV === 'DEVELOPMENT') {
  MONGODB_URI = process.env.MONGODB_URI as string;
}

export { PORT, MONGODB_URI, JWT_SECRET_KEY };
