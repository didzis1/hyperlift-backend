"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
exports.register = `
	mutation Mutation($registerInput: RegisterInput!) {
		register(registerInput: $registerInput) {
			_id
			firstName
			lastName
			email
		}
	}
`;
//# sourceMappingURL=register.js.map