import 'reflect-metadata';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { Routine } from '../types/Routine';
import UserModel from '../../models/user';
import RoutineModel from '../../models/routine';

@Resolver()
export class RoutineResolver {
  @Mutation(() => Routine)
  async createRoutine(
    @Arg('title') title: string,
    @Arg('userId') userId: string
  ): Promise<Routine> {
    const findUser = await UserModel.findOne({
      _id: userId
    });

    if (!findUser) throw new Error('User not found.');

    const newRoutine = new RoutineModel({
      title,
      workouts: [],
      user: userId
    });

    const savedRoutine = await newRoutine.save();

    if (!savedRoutine)
      throw new Error('An error occured while trying to create a new routine');

    findUser.routines = findUser?.routines?.concat(savedRoutine._id);

    try {
      await findUser.save();
    } catch (error) {
      throw new Error(
        `An error occured while saving routine to user: ${error}`
      );
    }

    return newRoutine;
  }
}
