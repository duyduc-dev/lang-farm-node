"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const routerConfig_1 = __importDefault(require("./configs/routerConfig"));
const appConfig_1 = __importDefault(require("./configs/appConfig"));
const viewConfig_1 = __importDefault(require("./configs/viewConfig"));
const products_1 = require("./database/products");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.errorHandler();
        console.log('>>>>', products_1.productsDB);
    }
    config() {
        (0, viewConfig_1.default)(this.app, __dirname);
        (0, appConfig_1.default)(this.app, __dirname);
        (0, routerConfig_1.default)(this.app);
    }
    errorHandler() {
        // catch 404 and forward to error handler
        const requestHandler = function (_req, _res, next) {
            next((0, http_errors_1.default)(404));
        };
        this.app.use(requestHandler);
        // error handler
        const errorRequestHandler = function (err, req, res, _next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            // render the error page
            res.status(err.status || 500);
            res.render('error', { layout: false });
        };
        this.app.use(errorRequestHandler);
    }
}
exports.default = new App().app;
