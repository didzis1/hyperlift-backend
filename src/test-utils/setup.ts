import { testConnection } from './testConnection';

// Drop all collections in the database and exit process
testConnection(true).then(() => process.exit());
