import 'reflect-metadata';
import { Query, Resolver } from 'type-graphql';
import { Routine } from '../../models/routine';
import RoutineModel from '../../models/routine';

@Resolver()
export class RoutineResolver {
  @Query(() => [Routine])
  async getAllRoutines(): Promise<Routine[]> {
    const getRoutines = await RoutineModel.find({});

    if (!getRoutines) throw new Error('Error while fetching routines');

    return getRoutines;
  }
}
