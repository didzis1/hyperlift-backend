import { UserResolver } from './UserResolver';
import { RoutineResolver } from './RoutineResolver';

export const resolvers = [UserResolver, RoutineResolver] as const;
