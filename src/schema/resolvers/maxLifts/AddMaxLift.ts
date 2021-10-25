import { MyContext } from '../../../types/MyContext';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { MaxLift } from '../../../models/maxLift';
import UserModel from '../../../models/user';
import { NewMaxLiftInput } from '../../inputs/NewMaxLiftInput';

@Resolver()
export class AddMaxLiftResolver {
  @Mutation(() => MaxLift)
  async addMaxLift(
    @Ctx() ctx: MyContext,
    @Arg('maxLiftData') maxLiftData: NewMaxLiftInput
  ): Promise<MaxLift> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to add a new max lift');
    }

    const user = await UserModel.findById(ctx.currentUser.id);

    if (!user) throw new Error('User not found');

    const newMaxLift = {
      ...maxLiftData
    };

    user.maxLifts.push(newMaxLift);

    try {
      await user.save();
    } catch (error) {
      throw new Error('An error occured while trying to save a new max lift');
    }

    return newMaxLift;
  }
}
