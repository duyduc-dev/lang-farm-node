"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const path_1 = __importDefault(require("path"));
function viewConfig(app, __dirname) {
    app.set('views', path_1.default.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express_ejs_layouts_1.default);
    app.set('layout', 'layout/MainLayout');
}
exports.default = viewConfig;
