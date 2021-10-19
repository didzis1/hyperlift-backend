import { RegisterResolver } from './user/RegisterResolver';
import { LoginResolver } from './user/LoginResolver';
import { RoutineResolver } from './routine/RoutineResolver';
import { MeResolver } from './user/MeResolver';
import { DeleteAccountResolver } from './user/DeleteAccountResolver';

export const resolvers = [
  RegisterResolver,
  RoutineResolver,
  LoginResolver,
  MeResolver,
  DeleteAccountResolver
] as const;
