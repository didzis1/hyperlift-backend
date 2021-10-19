import { Ctx, Query, Resolver } from 'type-graphql';
import { Routine } from '../../../models/routine';
import { MyContext } from '../../../types/MyContext';
import RoutineModel from '../../../models/routine';

@Resolver()
export class GetRoutinesResolver {
  @Query(() => [Routine])
  async getRoutines(@Ctx() ctx: MyContext): Promise<Routine[] | null> {
    if (!ctx.currentUser) {
      throw new Error('You must be authorized');
    }
    const userRoutines = await RoutineModel.find({
      user: ctx.currentUser
    }).populate('user');

    return userRoutines;
  }
}
