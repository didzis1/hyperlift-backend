export const createRoutine = `
	mutation Mutation($routineData: NewRoutineInput!) {
		createRoutine(routineData: $routineData) {
			id
			description
			workouts { 
				name
				exercises {
					exerciseName
					reps
					sets
					weight
				}
			}
		}
	}
`;
