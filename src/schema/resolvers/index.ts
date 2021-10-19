import { RegisterResolver } from './user/RegisterResolver';
import { LoginResolver } from './user/LoginResolver';
import { RoutineResolver } from './routine/RoutineResolver';
import { MeResolver } from './user/MeResolver';

export const resolvers = [
  RegisterResolver,
  RoutineResolver,
  LoginResolver,
  MeResolver
] as const;
