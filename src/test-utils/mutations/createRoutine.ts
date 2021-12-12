export const createRoutine = `
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
