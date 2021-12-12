import RoutineModel from '../../../models/routine';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { MyContext } from '../../../types/MyContext';
import { DeleteRoutineInput } from '../../inputs/RoutineInput';

@Resolver()
export class DeleteRoutineResolver {
  @Mutation(() => Boolean)
  async deleteRoutine(
    @Ctx() ctx: MyContext,
    @Arg('routineData') routineData: DeleteRoutineInput
  ): Promise<boolean> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to delete a routine');
    }

    const routine = await RoutineModel.findById(routineData._id);

    if (!routine) throw new Error('Routine not found');

    try {
      await routine.remove();
    } catch (error) {
      throw new Error('An error occured while trying to remove the routine');
    }
    return true;
  }
}
