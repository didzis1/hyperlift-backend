// User
import { RegisterResolver } from './user/RegisterResolver';
import { LoginResolver } from './user/LoginResolver';
import { MeResolver } from './user/MeResolver';
import { DeleteAccountResolver } from './user/DeleteAccountResolver';

// Routine
import { CreateRoutineResolver } from './routine/CreateRoutineResolver';
import { GetRoutinesResolver } from './routine/GetRoutines';

export const resolvers = [
  RegisterResolver,
  LoginResolver,
  MeResolver,
  DeleteAccountResolver,
  CreateRoutineResolver,
  GetRoutinesResolver
] as const;
