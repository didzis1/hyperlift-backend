import { MyContext } from '../../../types/MyContext';
import { Ctx, Mutation, Resolver } from 'type-graphql';
import UserModel from '../../../models/user';

@Resolver()
export class DeleteAccountResolver {
  @Mutation(() => Boolean)
  async deleteAccount(@Ctx() ctx: MyContext): Promise<Boolean> {
    if (!ctx.currentUser) {
      throw new Error(
        'You must be logged in to be able to delete your account'
      );
    }

    const userToDelete = await UserModel.findById(ctx.currentUser._id);

    if (!userToDelete) {
      throw new Error('User could not been found');
    }

    try {
      await userToDelete.delete();
    } catch (error) {
      throw new Error(`Error while trying to delete the user: ${error}`);
    }

    return true;
  }
}
