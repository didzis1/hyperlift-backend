import { Ctx, Query, Resolver } from 'type-graphql';
import { MaxLift } from '../../../models/maxLift';
import { MyContext } from '../../../types/MyContext';
import UserModel from '../../../models/user';

@Resolver()
export class GetMaxLifts {
  @Query(() => [MaxLift])
  async getMaxLifts(@Ctx() ctx: MyContext): Promise<MaxLift[] | []> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized');
    }
    const user = await UserModel.findById(ctx.currentUser.id).populate(
      'routines'
    );

    if (!user) new Error('User not found...');

    const userMaxLifts = user!.maxLifts;

    // Returns either routines or empty array
    return userMaxLifts;
  }
}
