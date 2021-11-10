export const addHistory = `
	mutation AddHistoryMutation($historyData: NewHistoryInput!) {
		addHistory(historyData: $historyData) {
			id
			routineId
			splitName
			exercises {
				exerciseName
				setsData {
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
