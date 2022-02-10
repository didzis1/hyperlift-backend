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
exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const maxLift_1 = require("./maxLift");
const routine_1 = require("./routine");
const history_1 = require("./history");
let User = class User {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Object)
], User.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Your email must be an actual email address' }),
    (0, typegoose_1.prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    (0, class_validator_1.Min)(12, { message: 'Age must be over twelve' }),
    (0, class_validator_1.Max)(100, { message: 'Age cannot be over 100' }),
    (0, typegoose_1.prop)({ required: false, default: null }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ required: false, default: null }),
    __metadata("design:type", String)
], User.prototype, "liftingType", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [routine_1.Routine]),
    (0, typegoose_1.prop)({
        ref: routine_1.Routine,
        required: false,
        default: []
    }),
    __metadata("design:type", Array)
], User.prototype, "routines", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [maxLift_1.MaxLift]),
    (0, typegoose_1.prop)({ type: () => [maxLift_1.MaxLift], required: false, default: [] }),
    __metadata("design:type", Array)
], User.prototype, "maxLifts", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [history_1.History]),
    (0, typegoose_1.prop)({ type: () => [history_1.History], required: false, default: [] }),
    __metadata("design:type", Array)
], User.prototype, "history", void 0);
User = __decorate([
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
const UserModel = (0, typegoose_1.getModelForClass)(User);
exports.default = UserModel;
//# sourceMappingURL=user.js.map