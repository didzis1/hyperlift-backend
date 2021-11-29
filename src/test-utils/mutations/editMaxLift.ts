export const editMaxLift = `
	mutation EditMaxLift($maxLiftData: EditMaxLiftInput!) {
		editMaxLift(maxLiftData: $maxLiftData) {
			id
			exercise
			weight
			weightHistory {
				weight
				date
			}
		}
	}
`;
