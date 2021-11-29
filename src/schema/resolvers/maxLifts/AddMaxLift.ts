import { MyContext } from '../../../types/MyContext';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { MaxLift } from '../../../models/maxLift';
import UserModel from '../../../models/user';
import { NewMaxLiftInput } from '../../inputs/NewMaxLiftInput';
import { v4 as uuidv4 } from 'uuid';

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

    const newMaxLift: MaxLift = {
      id: uuidv4(),
      ...maxLiftData,
      // Initialize weightHistory with set weight and add current date
      weightHistory: [
        {
          date: new Date(),
          weight: maxLiftData.weight
        }
      ]
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
