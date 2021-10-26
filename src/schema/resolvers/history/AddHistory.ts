import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { History } from '../../../models/history';
import { NewHistoryInput } from '../../inputs/NewHistoryInput';
import { MyContext } from '../../../types/MyContext';
import UserModel from '../../../models/user';
import { v4 as uuidv4 } from 'uuid';
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

    const newHistory = {
      id: uuidv4(),
      workout: historyData.workout,
      routineId: historyData.routineId,
      createdAt: new Date()
    };

    user.history.push(newHistory);

    try {
      await user.save();
    } catch (error) {
      throw new Error('An error occured while trying to save your workout');
    }

    return newHistory;
  }
}
