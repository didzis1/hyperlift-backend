import 'reflect-metadata';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Routine, WorkoutInput } from '../types/Routine';
import UserModel from '../../models/user';
import RoutineModel from '../../models/routine';

@Resolver()
export class RoutineResolver {
  @Query(() => [Routine])
  async getAllRoutines(): Promise<Routine[]> {
    const getRoutines = await RoutineModel.find({});

    if (!getRoutines) throw new Error('Error while fetching routines');

    return getRoutines;
  }

  @Mutation(() => Routine)
  async createRoutine(
    @Arg('title') title: string,
    @Arg('description') description: string,
    @Arg('workouts', () => [WorkoutInput]) workouts: WorkoutInput[],
    @Arg('userId') userId: string
  ): Promise<Routine> {
    const findUser = await UserModel.findOne({
      _id: userId
    });

    if (!findUser) throw new Error('User not found.');

    // Add user ID as a reference to who created the routine
    const newRoutine = new RoutineModel({
      title,
      description,
      workouts,
      user: userId
    });

    // Save the new routine to the database
    const savedRoutine = await newRoutine.save();

    if (!savedRoutine)
      throw new Error('An error occured while trying to create a new routine');

    // Save the routine's ID to the user's routine array
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
