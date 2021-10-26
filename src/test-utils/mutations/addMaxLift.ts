export const addMaxLift = `
	mutation Mutation($maxLiftData: NewMaxLiftInput!) {
		addMaxLift(maxLiftData: $maxLiftData) {
			id
			exercise
			weight
		}
	}
`;
