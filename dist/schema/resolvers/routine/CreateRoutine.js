"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoutineResolver = void 0;
const type_graphql_1 = require("type-graphql");
const routine_1 = __importStar(require("../../../models/routine"));
const RoutineInput_1 = require("../../inputs/RoutineInput");
const user_1 = __importDefault(require("../../../models/user"));
let CreateRoutineResolver = class CreateRoutineResolver {
    async createRoutine(ctx, routineData) {
        if (!ctx.currentUser) {
            throw new Error('You must be authorized to create a routine');
        }
        const user = await user_1.default.findById(ctx.currentUser._id);
        if (!user) {
            throw new Error('User not found...');
        }
        const newRoutine = new routine_1.default(routineData);
        const savedRoutine = await newRoutine.save();
        if (!savedRoutine)
            throw new Error('Error while trying to save a routine...');
        user === null || user === void 0 ? void 0 : user.routines.push(savedRoutine);
        await user.save();
        return savedRoutine;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => routine_1.Routine),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('routineData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, RoutineInput_1.NewRoutineInput]),
    __metadata("design:returntype", Promise)
], CreateRoutineResolver.prototype, "createRoutine", null);
CreateRoutineResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CreateRoutineResolver);
exports.CreateRoutineResolver = CreateRoutineResolver;
//# sourceMappingURL=CreateRoutine.js.map