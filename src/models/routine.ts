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
    return this.workouts.reduce((accelerator, workout) => {
      return (
        accelerator +
        workout.exercises.reduce((accelerator, exercise) => {
          return accelerator + exercise.sets;
        }, 0)
      );
    }, 0);
  }

  @Field(() => Int)
  totalReps(): number {
    return this.workouts.reduce((accelerator, workout) => {
      return (
        accelerator +
        workout.exercises.reduce((accelerator, exercise) => {
          return accelerator + exercise.reps;
        }, 0)
      );
    }, 0);
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
}

const RoutineModel = getModelForClass(Routine);

export default RoutineModel;
