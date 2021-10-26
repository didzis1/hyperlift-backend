export const login = `
	mutation LoginMutation($loginInput: LoginInput!) {
		login(loginInput: $loginInput) {
			value
		}
	}
`;
