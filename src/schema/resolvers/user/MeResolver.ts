import { Query, Resolver, Ctx } from 'type-graphql';
import { MyContext } from '../../../types/MyContext';
import { User } from '../../../models/user';

@Resolver()
export class MeResolver {
  @Query(() => User)
  async me(@Ctx() ctx: MyContext): Promise<User | null> {
    return ctx.currentUser;
  }
}
