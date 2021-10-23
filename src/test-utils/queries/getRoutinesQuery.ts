export const getRoutinesQuery = `
	query Query {
		getRoutines {
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
