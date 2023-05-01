"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@/routes/index"));
const online_store_1 = __importDefault(require("@/routes/online-store"));
const constants_1 = require("@/utils/constants");
const routerConfig = (app) => {
    app.use(constants_1.routesPath.HOME, index_1.default);
    app.use(constants_1.routesPath.ONLINE_STORE, online_store_1.default);
};
exports.default = routerConfig;
