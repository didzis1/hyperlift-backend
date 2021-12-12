export const register = `
	mutation Mutation($registerInput: RegisterInput!) {
		register(registerInput: $registerInput) {
			_id
			firstName
			lastName
			email
		}
	}
`;
