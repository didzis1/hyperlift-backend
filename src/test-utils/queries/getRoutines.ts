export const getRoutines = `
	query Query {
		getRoutines {
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
