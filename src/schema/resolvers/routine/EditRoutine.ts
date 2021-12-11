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
      throw new Error('You must be authorized to add a new max lift');
    }

    const oldRoutine = await RoutineModel.findById(routineData._id);

    if (!oldRoutine) throw new Error('Routine was not found');

    return oldRoutine;
  }
}
