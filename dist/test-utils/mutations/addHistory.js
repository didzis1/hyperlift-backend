"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHistory = void 0;
exports.addHistory = `
mutation AddHistory($historyData: NewHistoryInput!) {
  addHistory(historyData: $historyData) {
    id
    routineId
    splitName
    exercises {
      exerciseName
      volumeSets {
        set
        reps
        weight
      }
    }
    notes
    createdAt
  }
}
`;
//# sourceMappingURL=addHistory.js.map