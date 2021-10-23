import { Arg, Mutation, Resolver } from 'type-graphql';
import { LoginInput } from '../../inputs/LoginInput';
import UserModel from '../../../models/user';
import { Token as TokenObject } from '../../../models/token';
import { NewToken } from '../../../types/Token';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../../../utils/config';

@Resolver()
export class LoginResolver {
  @Mutation(() => TokenObject, { nullable: true })
  async login(
    @Arg('loginInput') { email, password }: LoginInput
  ): Promise<NewToken | null> {
    const user = await UserModel.findOne({ email });

    if (!user) throw new Error('Wrong username or password');

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      throw new Error('Wrong username or password');
    }

    const userForToken = {
      email: user.email,
      id: user._id
    };
    return {
      value: jwt.sign(userForToken, JWT_SECRET_KEY as string)
    };
  }
}
