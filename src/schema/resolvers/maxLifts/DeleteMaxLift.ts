import { RemoveMaxLiftInput } from '../../inputs/RemoveMaxLiftInput';
import UserModel from '../../../models/user';
import { MyContext } from '../../../types/MyContext';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class DeleteMaxLiftResolver {
  @Mutation(() => Boolean)
  async deleteMaxLift(
    @Ctx() ctx: MyContext,
    @Arg('maxLiftData') maxLiftData: RemoveMaxLiftInput
  ): Promise<Boolean> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to add a new max lift');
    }

    const user = await UserModel.findById(ctx.currentUser._id);

    if (!user) throw new Error('User not found');

    // If maxLift doesn't exist return false
    if (!user.maxLifts.find((maxLift) => maxLift.id === maxLiftData.id)) {
      return false;
    }

    user.maxLifts = user.maxLifts.filter(
      (maxLift) => maxLift.id !== maxLiftData.id
    );

    try {
      await user.save();
    } catch (error) {
      throw new Error('An error occured while trying to save a new max lift');
    }

    return true;
  }
}
