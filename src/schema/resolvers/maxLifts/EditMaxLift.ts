import { MaxLift } from '../../../models/maxLift';
import { EditMaxLiftInput } from '../../inputs/EditMaxLiftInput';
import UserModel from '../../../models/user';
import { MyContext } from '../../../types/MyContext';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class EditMaxLiftResolver {
  @Mutation(() => MaxLift)
  async editMaxLift(
    @Ctx() ctx: MyContext,
    @Arg('maxLiftData') maxLiftData: EditMaxLiftInput
  ): Promise<MaxLift> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to add a new max lift');
    }

    const user = await UserModel.findById(ctx.currentUser.id);

    if (!user) throw new Error('User not found');

    const oldMaxLift = user.maxLifts.find(
      (maxLift) => maxLift.id === maxLiftData.id
    );

    if (!oldMaxLift) throw new Error('Max lift was not found');

    console.log('Old', oldMaxLift);

    const updatedMaxLift: MaxLift = {
      id: oldMaxLift.id,
      exercise: oldMaxLift.exercise,
      weight: maxLiftData.weight,
      weightHistory: oldMaxLift.weightHistory?.concat({
        weight: maxLiftData.weight,
        date: maxLiftData.date
      })
    };

    console.log('Updated', updatedMaxLift);

    user.maxLifts = user.maxLifts.map((maxLift) =>
      maxLift.id === maxLiftData.id ? updatedMaxLift : maxLift
    );

    try {
      await user.save();
    } catch (error) {
      throw new Error('An error occured while trying to save a new max lift');
    }

    return updatedMaxLift;
  }
}
