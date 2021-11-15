export const createRoutine = `
	mutation CreateRoutineMutation($routineData: NewRoutineInput!) {
		createRoutine(routineData: $routineData) {
			id
			description
			workouts {
				name
				exercises {
					exerciseName
					setsData {
						reps
						set
						weight
					}
				}
			}
		}
	}
`;
