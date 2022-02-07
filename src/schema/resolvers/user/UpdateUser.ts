import UserModel, { User } from '../../../models/user';
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { ProfileInput } from '../../inputs/ProfileInput';
import { MyContext } from '../../../types/MyContext';

@Resolver()
export class UpdateUserResolver {
  @Mutation(() => User)
  async updateUser(
    @Ctx() ctx: MyContext,
    @Arg('profileInput') profileInput: ProfileInput
  ): Promise<User> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized to add a new routine');
    }

    const user = await UserModel.findById(ctx.currentUser._id);

    if (!user) throw new Error('User not found');

    try {
      await user.updateOne({
        firstName: profileInput.firstName,
        lastName: profileInput.lastName,
        age: profileInput.age,
        liftingType: profileInput.liftingType
      });
    } catch (error) {
      throw new Error('An error occured while trying to update users profile');
    }

    const updatedUser = await UserModel.findById(ctx.currentUser._id);

    if (!updatedUser)
      throw new Error('Something went wrong while editing users profile');

    return updatedUser;
  }
}
