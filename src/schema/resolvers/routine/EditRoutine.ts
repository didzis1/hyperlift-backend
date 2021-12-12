import RoutineModel, { Routine } from '../../../models/routine';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { MyContext } from '../../../types/MyContext';
import { EditRoutineInput } from '../../inputs/RoutineInput';

@Resolver()
export class EditRoutineResolver {
  @Mutation(() => Routine)
  async editRoutine(
    @Ctx() ctx: MyContext,
    @Arg('routineData') routineData: EditRoutineInput
  ): Promise<Routine> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to add a new routine');
    }

    const oldRoutine = await RoutineModel.findById(routineData._id);

    if (!oldRoutine) throw new Error('Routine was not found');

    try {
      await oldRoutine.update({
        description: routineData.description,
        workouts: routineData.workouts
      });
    } catch (error) {
      throw new Error('An error occured while trying to edit the routine');
    }

    const updatedRoutine = await RoutineModel.findById(routineData._id);

    if (!updatedRoutine)
      throw new Error('Something went wrong while editing your routine');

    return updatedRoutine;
  }
}
