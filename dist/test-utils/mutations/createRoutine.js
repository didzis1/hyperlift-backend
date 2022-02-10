"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutine = void 0;
exports.createRoutine = `
	mutation CreateRoutine($routineData: NewRoutineInput!) {
		createRoutine(routineData: $routineData) {
			_id
			description
			workouts {
				name
				exercises {
					exerciseName
					reps
					sets
				}
			}
		}
	}
`;
//# sourceMappingURL=createRoutine.js.map