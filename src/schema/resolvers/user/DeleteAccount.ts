import { MyContext } from '../../../types/MyContext';
import { Ctx, Mutation, Resolver } from 'type-graphql';
import UserModel from '../../../models/user';

@Resolver()
export class DeleteAccountResolver {
  @Mutation(() => Boolean)
  async deleteAccount(@Ctx() ctx: MyContext): Promise<Boolean> {
    if (!ctx.currentUser) {
      return false;
    }

    const userToDelete = await UserModel.findById(ctx.currentUser.id);

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
