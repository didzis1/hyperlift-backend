export const createRoutineMutation = `
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
