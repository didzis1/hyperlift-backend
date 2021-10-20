import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/config';
import UserModel from '../models/user';
import RoutineModel from '../models/routine';

export const testConnection = async (dropDb: boolean = false) => {
  await mongoose
    .connect(MONGODB_URI as string)
    .then(() => console.log('Connected successfully to test MongoDB'))
    .catch((error) =>
      console.log('Error connecting to test MongoDB', error.message)
    );

  if (dropDb) {
    await UserModel.collection.drop();
    await RoutineModel.collection.drop();
  }
};
