import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType, Int, ID } from 'type-graphql';
import { Min } from 'class-validator';
import { ObjectId } from 'mongoose';

@ObjectType()
export class Routine {
  @Field(() => ID)
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  description: string;

  @Field(() => [WorkoutSplit])
  @Property({ type: () => [WorkoutSplit], default: [] })
  workouts: WorkoutSplit[];

  @Field(() => Int)
  totalSets(): number {
    const totalSets = this.workouts.reduce((accelerator, workout) => {
      return (
        accelerator +
        workout.exercises.reduce((accelerator, exercise) => {
          return accelerator + exercise.sets;
        }, 0)
      );
    }, 0);

    return totalSets;
  }

  @Field(() => Int)
  totalReps(): number {
    const totalReps = this.workouts.reduce((accelerator, workout) => {
      return (
        accelerator +
        workout.exercises.reduce((accelerator, exercise) => {
          return accelerator + exercise.reps;
        }, 0)
      );
    }, 0);

    return totalReps;
  }

  @Field(() => Int)
  totalSplits(): number {
    return this.workouts.length;
  }
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
