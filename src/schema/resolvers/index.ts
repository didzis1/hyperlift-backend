// User
import { RegisterResolver } from './user/RegisterResolver';
import { LoginResolver } from './user/LoginResolver';
import { MeResolver } from './user/MeResolver';
import { DeleteAccountResolver } from './user/DeleteAccountResolver';

// Routine
import { CreateRoutineResolver } from './routine/CreateRoutineResolver';
import { GetRoutinesResolver } from './routine/GetRoutines';

// History workouts
import { AddHistoryResolver } from './history/AddHistory';

export const resolvers = [
  RegisterResolver,
  LoginResolver,
  MeResolver,
  DeleteAccountResolver,
  CreateRoutineResolver,
  GetRoutinesResolver,
  AddHistoryResolver
] as const;
