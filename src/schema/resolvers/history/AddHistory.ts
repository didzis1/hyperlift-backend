import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import HistoryModel, { History } from '../../../models/history';
import RoutineModel from '../../../models/routine';
import { NewHistoryInput } from '../../inputs/NewHistoryInput';
import { MyContext } from '../../../types/MyContext';
import UserModel from '../../../models/user';

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

    const user = await UserModel.findById(ctx.currentUser.id);

    if (!user) throw new Error('User not found');

    const routineInUse = await RoutineModel.findById(historyData.routine);

    // This should never happen since the workout comes from routine
    if (!routineInUse) throw new Error('Could not find the routine..');

    const newHistory = await HistoryModel.create({
      ...historyData,
      routine: routineInUse._id
    });

    user.history.push(newHistory);

    try {
      await user.save();
    } catch (error) {
      throw new Error('An error occured while trying to save your workout');
    }

    return newHistory.populate('routine');
  }
}
