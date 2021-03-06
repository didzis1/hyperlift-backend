import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import RoutineModel, { Routine } from '../../../models/routine';
import { NewRoutineInput } from '../../inputs/RoutineInput';
import { MyContext } from '../../../types/MyContext';
import UserModel from '../../../models/user';
@Resolver()
export class CreateRoutineResolver {
  @Mutation(() => Routine)
  async createRoutine(
    @Ctx() ctx: MyContext,
    @Arg('routineData') routineData: NewRoutineInput
  ): Promise<Routine> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to create a routine');
    }

    const user = await UserModel.findById(ctx.currentUser._id);

    if (!user) {
      // This should not happen since the user is logged in
      throw new Error('User not found...');
    }

    // Create a new routine and save it to the database
    const newRoutine = new RoutineModel(routineData);
    const savedRoutine = await newRoutine.save();

    if (!savedRoutine)
      throw new Error('Error while trying to save a routine...');

    // Add routine reference to the user that created it
    user?.routines.push(savedRoutine);
    await user.save();

    return savedRoutine;
  }
}
