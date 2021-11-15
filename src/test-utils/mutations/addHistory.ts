export const addHistory = `
	mutation Mutation($historyData: NewHistoryInput!) {
		addHistory(historyData: $historyData) {
			id
			routineId
			splitName
			exercises {
				exerciseName
				historySets {
					set
					reps
					weight
				}
			}
			notes
			createdAt
		}
	}
`;
