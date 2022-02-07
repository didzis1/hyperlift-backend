// User
import { RegisterResolver } from './user/Register';
import { LoginResolver } from './user/Login';
import { MeResolver } from './user/Me';
import { DeleteAccountResolver } from './user/DeleteAccount';
import { UpdateUserResolver } from './user/UpdateUser';

// Routine
import { GetRoutinesResolver } from './routine/GetRoutines';
import { CreateRoutineResolver } from './routine/CreateRoutine';
import { EditRoutineResolver } from './routine/EditRoutine';
import { DeleteRoutineResolver } from './routine/DeleteRoutine';

// History workouts
import { GetHistoryResolver } from './history/GetHistory';
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
  UpdateUserResolver,
  CreateRoutineResolver,
  GetRoutinesResolver,
  EditRoutineResolver,
  DeleteRoutineResolver,
  GetHistoryResolver,
  AddHistoryResolver,
  EditHistoryResolver,
  AddMaxLiftResolver,
  GetMaxLiftsResolver,
  EditMaxLiftResolver,
  DeleteMaxLiftResolver
] as const;
