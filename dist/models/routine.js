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
exports.Exercise = exports.WorkoutSplit = exports.Routine = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let Routine = class Routine {
    totalSets() {
        return this.workouts.reduce((accelerator, workout) => {
            return (accelerator +
                workout.exercises.reduce((accelerator, exercise) => {
                    return accelerator + exercise.sets;
                }, 0));
        }, 0);
    }
    totalReps() {
        return this.workouts.reduce((accelerator, workout) => {
            return (accelerator +
                workout.exercises.reduce((accelerator, exercise) => {
                    return accelerator + exercise.reps;
                }, 0));
        }, 0);
    }
    totalSplits() {
        return this.workouts.length;
    }
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Object)
], Routine.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Routine.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [WorkoutSplit]),
    (0, typegoose_1.prop)({ type: () => [WorkoutSplit], default: [] }),
    __metadata("design:type", Array)
], Routine.prototype, "workouts", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Routine.prototype, "totalSets", null);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Routine.prototype, "totalReps", null);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Routine.prototype, "totalSplits", null);
Routine = __decorate([
    (0, type_graphql_1.ObjectType)()
], Routine);
exports.Routine = Routine;
let WorkoutSplit = class WorkoutSplit {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], WorkoutSplit.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Exercise]),
    (0, typegoose_1.prop)({ type: () => [Exercise], required: true }),
    __metadata("design:type", Array)
], WorkoutSplit.prototype, "exercises", void 0);
WorkoutSplit = __decorate([
    (0, type_graphql_1.ObjectType)()
], WorkoutSplit);
exports.WorkoutSplit = WorkoutSplit;
let Exercise = class Exercise {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Exercise.prototype, "exerciseName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, class_validator_1.Min)(1, { message: 'At least one repetition is required' }),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Exercise.prototype, "reps", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, class_validator_1.Min)(1, { message: 'At least one set is required' }),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Exercise.prototype, "sets", void 0);
Exercise = __decorate([
    (0, type_graphql_1.ObjectType)()
], Exercise);
exports.Exercise = Exercise;
const RoutineModel = (0, typegoose_1.getModelForClass)(Routine);
exports.default = RoutineModel;
//# sourceMappingURL=routine.js.map