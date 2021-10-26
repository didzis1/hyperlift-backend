// User
import { RegisterResolver } from './user/Register';
import { LoginResolver } from './user/Login';
import { MeResolver } from './user/Me';
import { DeleteAccountResolver } from './user/DeleteAccount';

// Routine
import { CreateRoutineResolver } from './routine/CreateRoutine';
import { GetRoutinesResolver } from './routine/GetRoutines';

// History workouts
import { AddHistoryResolver } from './history/AddHistory';
import { EditHistoryResolver } from './history/EditHistory';

// MaxLift
import { AddMaxLiftResolver } from './maxLifts/AddMaxLift';
import { GetMaxLiftsResolver } from './maxLifts/GetMaxLifts';
import { EditMaxLiftResolver } from './maxLifts/EditMaxLift';
import { DeleteMaxLiftResolver } from './maxLifts/DeleteMaxLift';

export const resolvers = [
  RegisterResolver,
  LoginResolver,
  MeResolver,
  DeleteAccountResolver,
  CreateRoutineResolver,
  GetRoutinesResolver,
  AddHistoryResolver,
  EditHistoryResolver,
  AddMaxLiftResolver,
  GetMaxLiftsResolver,
  EditMaxLiftResolver,
  DeleteMaxLiftResolver
] as const;
