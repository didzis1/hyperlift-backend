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
exports.VolumeSets = exports.HistoryExercise = exports.History = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const class_validator_1 = require("class-validator");
let History = class History {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], History.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], History.prototype, "routineId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], History.prototype, "splitName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [HistoryExercise]),
    (0, typegoose_1.prop)({ type: () => [HistoryExercise], required: true }),
    __metadata("design:type", Array)
], History.prototype, "exercises", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ required: false }),
    __metadata("design:type", String)
], History.prototype, "notes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], History.prototype, "createdAt", void 0);
History = __decorate([
    (0, type_graphql_1.ObjectType)()
], History);
exports.History = History;
let HistoryExercise = class HistoryExercise {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], HistoryExercise.prototype, "exerciseName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [VolumeSets]),
    (0, typegoose_1.prop)({ type: () => [VolumeSets], required: true }),
    __metadata("design:type", Array)
], HistoryExercise.prototype, "volumeSets", void 0);
HistoryExercise = __decorate([
    (0, type_graphql_1.ObjectType)()
], HistoryExercise);
exports.HistoryExercise = HistoryExercise;
let VolumeSets = class VolumeSets {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], VolumeSets.prototype, "set", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, class_validator_1.Min)(1, { message: 'At least one repetition is required' }),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], VolumeSets.prototype, "reps", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float, { nullable: true }),
    (0, typegoose_1.prop)({ required: false }),
    __metadata("design:type", Number)
], VolumeSets.prototype, "weight", void 0);
VolumeSets = __decorate([
    (0, type_graphql_1.ObjectType)()
], VolumeSets);
exports.VolumeSets = VolumeSets;
//# sourceMappingURL=history.js.map