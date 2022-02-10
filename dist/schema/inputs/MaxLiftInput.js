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
exports.RemoveMaxLiftInput = exports.EditMaxLiftInput = exports.NewMaxLiftInput = void 0;
const type_graphql_1 = require("type-graphql");
let NewMaxLiftInput = class NewMaxLiftInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NewMaxLiftInput.prototype, "exercise", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], NewMaxLiftInput.prototype, "weight", void 0);
NewMaxLiftInput = __decorate([
    (0, type_graphql_1.InputType)()
], NewMaxLiftInput);
exports.NewMaxLiftInput = NewMaxLiftInput;
let EditMaxLiftInput = class EditMaxLiftInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditMaxLiftInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], EditMaxLiftInput.prototype, "weight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], EditMaxLiftInput.prototype, "date", void 0);
EditMaxLiftInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditMaxLiftInput);
exports.EditMaxLiftInput = EditMaxLiftInput;
let RemoveMaxLiftInput = class RemoveMaxLiftInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RemoveMaxLiftInput.prototype, "id", void 0);
RemoveMaxLiftInput = __decorate([
    (0, type_graphql_1.InputType)()
], RemoveMaxLiftInput);
exports.RemoveMaxLiftInput = RemoveMaxLiftInput;
//# sourceMappingURL=MaxLiftInput.js.map