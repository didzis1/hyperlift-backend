export const addHistory = `
	mutation Mutation($historyData: NewHistoryInput!) {
		addHistory(historyData: $historyData) {
			id
			routineId
			workout {
				name
				exercises {
					reps
					exerciseName
					sets
					weight
				}
			}
			createdAt
		}
	}
`;
