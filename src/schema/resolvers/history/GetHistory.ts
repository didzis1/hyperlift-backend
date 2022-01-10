import { Ctx, Query, Resolver } from 'type-graphql';
import { History } from '../../../models/history';
import { MyContext } from '../../../types/MyContext';
import UserModel from '../../../models/user';

@Resolver()
export class GetHistoryResolver {
  @Query(() => [History])
  async getHistory(@Ctx() ctx: MyContext): Promise<History[] | []> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized');
    }
    const user = await UserModel.findById(ctx.currentUser._id).populate(
      'routines'
    );

    if (!user) new Error('User not found...');

    const userHistory = user!.history;

    // Returns either routines or empty array
    return userHistory;
  }
}
