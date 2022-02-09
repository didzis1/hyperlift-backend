export const addHistory = `
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
