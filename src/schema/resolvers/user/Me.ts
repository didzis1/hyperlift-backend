import { Query, Resolver, Ctx } from 'type-graphql';
import { MyContext } from '../../../types/MyContext';
import { User } from '../../../models/user';

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | null> {
    // Returns either null or the currently logged in user
    return ctx.currentUser;
  }
}
