import { EditHistoryInput } from '../../inputs/EditHistoryInput';
import UserModel from '../../../models/user';
import { MyContext } from '../../../types/MyContext';
import { History } from '../../../models/history';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class EditHistoryResolver {
  @Mutation(() => History)
  async editHistory(
    @Ctx() ctx: MyContext,
    @Arg('editHistoryData') editHistoryData: EditHistoryInput
  ): Promise<History> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to add a new max lift');
    }

    const user = await UserModel.findById(ctx.currentUser.id);

    if (!user) throw new Error('User not found');

    const currentHistory = user.history.find(
      (history) => history.id === editHistoryData.id
    );

    if (!currentHistory) throw new Error('History not found');

    const newHistory = {
      id: currentHistory.id,
      routineId: currentHistory.routineId,
      splitName: editHistoryData.splitName,
      exercises: editHistoryData.exercises,
      createdAt: currentHistory.createdAt
    };

    user.history = user.history.map((history) =>
      history.id === editHistoryData.id ? newHistory : history
    );

    try {
      await user.save();
    } catch (error) {
      throw new Error('An error occured while trying to save a new max lift');
    }

    return newHistory;
  }
}
