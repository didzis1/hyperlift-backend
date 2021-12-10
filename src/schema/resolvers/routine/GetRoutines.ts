import { Ctx, Query, Resolver } from 'type-graphql';
import { Routine } from '../../../models/routine';
import { MyContext } from '../../../types/MyContext';
import UserModel from '../../../models/user';

@Resolver(Routine)
export class GetRoutinesResolver {
  @Query(() => [Routine])
  async getRoutines(@Ctx() ctx: MyContext): Promise<Routine[] | []> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized');
    }
    const user = await UserModel.findById(ctx.currentUser._id).populate(
      'routines'
    );

    if (!user) new Error('User not found...');

    const userRoutines = user!.routines;

    // Returns either routines or empty array
    return userRoutines;
  }
}
