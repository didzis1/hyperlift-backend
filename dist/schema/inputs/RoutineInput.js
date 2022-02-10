"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRoutineInput = exports.EditRoutineInput = exports.NewExerciseInput = exports.NewWorkoutSplitInput = exports.NewRoutineInput = void 0;
const type_graphql_1 = require("type-graphql");
let NewRoutineInput = class NewRoutineInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NewRoutineInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [NewWorkoutSplitInput]),
    __metadata("design:type", Array)
], NewRoutineInput.prototype, "workouts", void 0);
NewRoutineInput = __decorate([
    (0, type_graphql_1.InputType)()
], NewRoutineInput);
exports.NewRoutineInput = NewRoutineInput;
let NewWorkoutSplitInput = class NewWorkoutSplitInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NewWorkoutSplitInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [NewExerciseInput]),
    __metadata("design:type", Array)
], NewWorkoutSplitInput.prototype, "exercises", void 0);
NewWorkoutSplitInput = __decorate([
    (0, type_graphql_1.InputType)()
], NewWorkoutSplitInput);
exports.NewWorkoutSplitInput = NewWorkoutSplitInput;
let NewExerciseInput = class NewExerciseInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NewExerciseInput.prototype, "exerciseName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], NewExerciseInput.prototype, "reps", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], NewExerciseInput.prototype, "sets", void 0);
NewExerciseInput = __decorate([
    (0, type_graphql_1.InputType)()
], NewExerciseInput);
exports.NewExerciseInput = NewExerciseInput;
let EditRoutineInput = class EditRoutineInput extends NewRoutineInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Object)
], EditRoutineInput.prototype, "_id", void 0);
EditRoutineInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditRoutineInput);
exports.EditRoutineInput = EditRoutineInput;
let DeleteRoutineInput = class DeleteRoutineInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Object)
], DeleteRoutineInput.prototype, "_id", void 0);
DeleteRoutineInput = __decorate([
    (0, type_graphql_1.InputType)()
], DeleteRoutineInput);
exports.DeleteRoutineInput = DeleteRoutineInput;
//# sourceMappingURL=RoutineInput.js.map