import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import HistoryModel, { History } from '../../../models/history';
import RoutineModel from '../../../models/routine';
import { NewHistoryInput } from '../inputs/NewHistoryInput';
import { MyContext } from '../../../types/MyContext';

@Resolver()
export class AddHistoryResolver {
  @Mutation(() => History)
  async addHistory(
    @Ctx() ctx: MyContext,
    @Arg('historyData') historyData: NewHistoryInput
  ): Promise<History> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to create a workout history');
    }

    const routineInUse = await RoutineModel.findById(historyData.routine);
    console.log(historyData.routine);

    if (!routineInUse) {
      // This should never happen since the workout comes from routine
      throw new Error('Something went wrong while trying to save workout...');
    }

    const newHistory = new HistoryModel({
      ...historyData,
      routine: routineInUse._id
    });

    const savedHistory = await newHistory.save();

    return savedHistory.populate('routine');
  }
}
