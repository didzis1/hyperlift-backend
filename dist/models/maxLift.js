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
exports.WeightHistory = exports.MaxLift = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const class_validator_1 = require("class-validator");
let MaxLift = class MaxLift {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], MaxLift.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], MaxLift.prototype, "exercise", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    (0, class_validator_1.Min)(1, { message: 'Weight must be over 1 kg/lb' }),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], MaxLift.prototype, "weight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [WeightHistory], { nullable: true }),
    (0, typegoose_1.prop)({ type: () => [WeightHistory], default: [], required: false }),
    __metadata("design:type", Array)
], MaxLift.prototype, "weightHistory", void 0);
MaxLift = __decorate([
    (0, type_graphql_1.ObjectType)()
], MaxLift);
exports.MaxLift = MaxLift;
let WeightHistory = class WeightHistory {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    (0, class_validator_1.Min)(1, { message: 'Weight must be over 1 kg/lb' }),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], WeightHistory.prototype, "weight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Date)
], WeightHistory.prototype, "date", void 0);
WeightHistory = __decorate([
    (0, type_graphql_1.ObjectType)()
], WeightHistory);
exports.WeightHistory = WeightHistory;
//# sourceMappingURL=maxLift.js.map