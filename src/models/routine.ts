import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field, ObjectType, ID, Int } from 'type-graphql';

@ObjectType()
export class Routine {
  @Field(() => ID)
  id: ObjectId;

  @Field({ nullable: true })
  @Property({ required: false })
  description?: string;

  @Field(() => [WorkoutSplit])
  @Property({ type: () => [WorkoutSplit], default: [] })
  workouts: WorkoutSplit[];
}

@ObjectType()
export class WorkoutSplit {
  @Field()
  @Property({ required: true })
  name: string;

  @Field(() => [Exercise])
  @Property({ type: () => [Exercise], required: true })
  exercises: Exercise[];
}

@ObjectType()
export class Exercise {
  @Field()
  @Property({ required: true })
  exerciseName: string;

  @Field(() => Int)
  @Property({ required: true })
  reps: number;

  @Field(() => Int)
  @Property({ required: true })
  sets: number;

  @Field(() => Int, { nullable: true })
  @Property({ required: false })
  weight?: number;
}

const RoutineModel = getModelForClass(Routine);

export default RoutineModel;
