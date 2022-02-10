"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutines = void 0;
exports.getRoutines = `
	query Query {
		getRoutines {
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
//# sourceMappingURL=getRoutines.js.map