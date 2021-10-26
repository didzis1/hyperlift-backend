export const addHistory = `
	mutation Mutation($historyData: NewHistoryInput!) {
		addHistory(historyData: $historyData) {
			id
			routine {
				id
				description
			}
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
