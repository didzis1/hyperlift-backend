import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType, Int } from 'type-graphql';
import { Min } from 'class-validator';

@ObjectType()
export class Routine {
  @Field()
  @Property()
  id: string;

  @Field()
  @Property({ required: true })
  description: string;

  @Field(() => [WorkoutSplit])
  @Property({ type: () => [WorkoutSplit], default: [] })
  workouts: WorkoutSplit[];

  // @Field(() => Int)
  // get workoutAmount(): number {
  //   return this.workouts.length;
  // }
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
  @Min(1, { message: 'At least one repetition is required' })
  @Property({ required: true })
  reps: number;

  @Field(() => Int)
  @Min(1, { message: 'At least one set is required' })
  @Property({ required: true })
  sets: number;

  // @Field(() => [SetsData])
  // @Property({ type: () => [SetsData], required: true })
  // setsData: SetsData[];
}

// @ObjectType()
// export class SetsData {
//   @Field(() => Int)
//   @Min(1, { message: 'At least one repetition is required' })
//   @Property({ required: true })
//   reps: number;

//   @Field(() => Int)
//   @Property({ required: true })
//   set: number;

//   @Field(() => Float, { nullable: true })
//   @Min(1, { message: 'Weight cannot be lower than 1 kg/lb' })
//   @Property({ required: false })
//   weight?: number;
// }

const RoutineModel = getModelForClass(Routine);

export default RoutineModel;
