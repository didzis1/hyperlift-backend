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
exports.EditVolumeSetsInput = exports.EditExerciseInput = exports.EditHistoryInput = exports.VolumeSetsInput = exports.ExerciseInput = exports.NewHistoryInput = void 0;
const type_graphql_1 = require("type-graphql");
let NewHistoryInput = class NewHistoryInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NewHistoryInput.prototype, "routineId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NewHistoryInput.prototype, "splitName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [ExerciseInput]),
    __metadata("design:type", Array)
], NewHistoryInput.prototype, "exercises", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NewHistoryInput.prototype, "notes", void 0);
NewHistoryInput = __decorate([
    (0, type_graphql_1.InputType)()
], NewHistoryInput);
exports.NewHistoryInput = NewHistoryInput;
let ExerciseInput = class ExerciseInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ExerciseInput.prototype, "exerciseName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [VolumeSetsInput]),
    __metadata("design:type", Array)
], ExerciseInput.prototype, "volumeSets", void 0);
ExerciseInput = __decorate([
    (0, type_graphql_1.InputType)()
], ExerciseInput);
exports.ExerciseInput = ExerciseInput;
let VolumeSetsInput = class VolumeSetsInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], VolumeSetsInput.prototype, "reps", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], VolumeSetsInput.prototype, "set", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], VolumeSetsInput.prototype, "weight", void 0);
VolumeSetsInput = __decorate([
    (0, type_graphql_1.InputType)()
], VolumeSetsInput);
exports.VolumeSetsInput = VolumeSetsInput;
let EditHistoryInput = class EditHistoryInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditHistoryInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditHistoryInput.prototype, "splitName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [EditExerciseInput]),
    __metadata("design:type", Array)
], EditHistoryInput.prototype, "exercises", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditHistoryInput.prototype, "notes", void 0);
EditHistoryInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditHistoryInput);
exports.EditHistoryInput = EditHistoryInput;
let EditExerciseInput = class EditExerciseInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditExerciseInput.prototype, "exerciseName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [EditVolumeSetsInput]),
    __metadata("design:type", Array)
], EditExerciseInput.prototype, "volumeSets", void 0);
EditExerciseInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditExerciseInput);
exports.EditExerciseInput = EditExerciseInput;
let EditVolumeSetsInput = class EditVolumeSetsInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], EditVolumeSetsInput.prototype, "reps", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], EditVolumeSetsInput.prototype, "set", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], EditVolumeSetsInput.prototype, "weight", void 0);
EditVolumeSetsInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditVolumeSetsInput);
exports.EditVolumeSetsInput = EditVolumeSetsInput;
//# sourceMappingURL=HistoryInput.js.map