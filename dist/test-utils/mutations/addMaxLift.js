"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMaxLift = void 0;
exports.addMaxLift = `
	mutation Mutation($maxLiftData: NewMaxLiftInput!) {
		addMaxLift(maxLiftData: $maxLiftData) {
			id
			exercise
			weight
		}
	}
`;
//# sourceMappingURL=addMaxLift.js.map