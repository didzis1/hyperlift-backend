export const loginMutation = `
	mutation LoginMutation($loginInput: LoginInput!) {
		login(loginInput: $loginInput) {
			value
		}
	}
`;
