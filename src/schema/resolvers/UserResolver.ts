import 'reflect-metadata';
import {
  Arg,
  ObjectType,
  Mutation,
  Query,
  Resolver,
  Field,
  Int
} from 'type-graphql';
import UserModel from '../../models/user';
const bcryptjs = require('bcryptjs');

@ObjectType()
export class User {
  @Field({ description: 'The username of the user' })
  username: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field(() => [Routine], { nullable: true })
  routines?: Routine[];
}

@ObjectType()
export class Routine {
  @Field()
  name: string;

  @Field(() => [Exercise])
  exercises: Exercise[];

  @Field(() => User)
  user: User;
}

@ObjectType()
export class Exercise {
  @Field()
  name: string;

  @Field(() => Int)
  repetitions: number;

  @Field(() => Int)
  sets: number;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'Hello world!';
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

    return savedUser;
  }
}
