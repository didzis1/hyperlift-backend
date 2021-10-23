export const registerMutation = `
	mutation Mutation($registerInput: RegisterInput!) {
		register(registerInput: $registerInput) {
			id
			firstName
			lastName
			email
		}
	}
`;
