"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alpinejs_1 = __importDefault(require("alpinejs"));
const app_1 = __importDefault(require("./app"));
const bootstrap = () => {
    (0, app_1.default)().init();
    alpinejs_1.default.start();
};
bootstrap();
