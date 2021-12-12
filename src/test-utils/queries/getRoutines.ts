export const getRoutines = `
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
