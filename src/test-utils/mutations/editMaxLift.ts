export const editMaxLift = `
	mutation Mutation($maxLiftData: EditMaxLiftInput!) {
		editMaxLift(maxLiftData: $maxLiftData) {
			id
			exercise
			weight
		}
	}
`;
