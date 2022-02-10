"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Register_1 = require("./user/Register");
const Login_1 = require("./user/Login");
const Me_1 = require("./user/Me");
const DeleteAccount_1 = require("./user/DeleteAccount");
const UpdateUser_1 = require("./user/UpdateUser");
const GetRoutines_1 = require("./routine/GetRoutines");
const CreateRoutine_1 = require("./routine/CreateRoutine");
const EditRoutine_1 = require("./routine/EditRoutine");
const DeleteRoutine_1 = require("./routine/DeleteRoutine");
const GetHistory_1 = require("./history/GetHistory");
const AddHistory_1 = require("./history/AddHistory");
const EditHistory_1 = require("./history/EditHistory");
const AddMaxLift_1 = require("./maxLifts/AddMaxLift");
const GetMaxLifts_1 = require("./maxLifts/GetMaxLifts");
const EditMaxLift_1 = require("./maxLifts/EditMaxLift");
const DeleteMaxLift_1 = require("./maxLifts/DeleteMaxLift");
exports.resolvers = [
    Register_1.RegisterResolver,
    Login_1.LoginResolver,
    Me_1.MeResolver,
    DeleteAccount_1.DeleteAccountResolver,
    UpdateUser_1.UpdateUserResolver,
    CreateRoutine_1.CreateRoutineResolver,
    GetRoutines_1.GetRoutinesResolver,
    EditRoutine_1.EditRoutineResolver,
    DeleteRoutine_1.DeleteRoutineResolver,
    GetHistory_1.GetHistoryResolver,
    AddHistory_1.AddHistoryResolver,
    EditHistory_1.EditHistoryResolver,
    AddMaxLift_1.AddMaxLiftResolver,
    GetMaxLifts_1.GetMaxLiftsResolver,
    EditMaxLift_1.EditMaxLiftResolver,
    DeleteMaxLift_1.DeleteMaxLiftResolver
];
//# sourceMappingURL=index.js.map