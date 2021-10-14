import 'reflect-metadata';
import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import UserModel from '../../models/user';
const bcryptjs = require('bcryptjs');
import { User } from '../types/User';

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'Hello world!';
  }

  @Query(() => [User])
  async getUsers() {
    let users;
    try {
      users = await UserModel.find({});
    } catch (error) {
      console.log(error.message);
    }

    return users;
  }

  @Query(() => User)
  async findUserByUsername(@Arg('username') username: string) {
    const user = await UserModel.findOne({ username });
    if (!user) throw new Error('User not found');
    return user;
  }

  @Mutation(() => User)
  async createUser(
    @Arg('username') username: string,
    @Arg('name') name: string,
    @Arg('password') password: string
  ): Promise<User> {
    // const saltRounds = 12;
    // const hashedPassword = await bcryptjs(password, saltRounds);
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = new UserModel({
      username,
      name,
      password: hashedPassword,
      routines: []
    });

    const savedUser = await user.save();

    if (!savedUser) throw new Error('User could not been saved...');

    return savedUser;
  }
}
