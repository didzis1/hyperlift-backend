"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
exports.login = `
	mutation LoginMutation($loginInput: LoginInput!) {
		login(loginInput: $loginInput) {
			value
		}
	}
`;
//# sourceMappingURL=login.js.map