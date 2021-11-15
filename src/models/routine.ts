import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class Routine {
  @Field()
  @Property()
  id: string;

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

  @Field(() => [SetsData])
  @Property({ type: () => [SetsData], required: true })
  setsData: SetsData[];
}

@ObjectType()
export class SetsData {
  @Field(() => Int)
  @Property({ required: true })
  reps: number;

  @Field(() => Int)
  @Property({ required: true })
  set: number;

  @Field(() => Int, { nullable: true })
  @Property({ required: false })
  weight?: number;
}

const RoutineModel = getModelForClass(Routine);

export default RoutineModel;
