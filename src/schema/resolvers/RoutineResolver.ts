import 'reflect-metadata';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Routine } from '../../models/routine';
import RoutineModel from '../../models/routine';
import { NewRoutineInput } from './types/RoutineInput';

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
    @Arg('routineData') routineData: NewRoutineInput
  ): Promise<Routine> {
    const user = {
      _id: '616d1bae70acbf1f2f748b6c'
    };

    const newRoutine = new RoutineModel({
      ...routineData,
      user: user._id
    });

    const savedRoutine = await newRoutine.save();

    if (!savedRoutine)
      throw new Error('Error while trying to save a routine...');

    // Populate the user field so that you can return user information
    return savedRoutine.populate('user');
  }
}
