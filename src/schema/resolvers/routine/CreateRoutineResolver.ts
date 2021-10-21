import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Routine } from '../../../models/routine';
import RoutineModel from '../../../models/routine';
import { NewRoutineInput } from '../inputs/RoutineInput';
import { MyContext } from '../../../types/MyContext';

@Resolver()
export class CreateRoutineResolver {
  @Mutation(() => Routine)
  async createRoutine(
    @Ctx() ctx: MyContext,
    @Arg('routineData') routineData: NewRoutineInput
  ): Promise<Routine> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to create a user');
    }

    const newRoutine = new RoutineModel({
      ...routineData,
      user: ctx.currentUser.id
    });

    const savedRoutine = await newRoutine.save();

    if (!savedRoutine)
      throw new Error('Error while trying to save a routine...');

    // Populate the user field so that you can return user information
    return savedRoutine.populate('user');
  }
}
