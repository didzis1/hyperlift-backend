export const deleteMaxLift = `
	mutation DeleteMaxLiftMutation($maxLiftData: RemoveMaxLiftInput!) {
		deleteMaxLift(maxLiftData: $maxLiftData)
	}
`;
