"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editMaxLift = void 0;
exports.editMaxLift = `
	mutation EditMaxLift($maxLiftData: EditMaxLiftInput!) {
		editMaxLift(maxLiftData: $maxLiftData) {
			id
			exercise
			weight
			weightHistory {
				weight
				date
			}
		}
	}
`;
//# sourceMappingURL=editMaxLift.js.map