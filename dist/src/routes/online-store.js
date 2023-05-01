"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("@/utils/constants");
const OnlineStoreController_1 = __importDefault(require("@/controllers/OnlineStoreController"));
const router = express_1.default.Router();
const onlineStoreController = new OnlineStoreController_1.default();
/* GET home page. */
router.get(constants_1.routesPath.HOME, onlineStoreController.index);
router.get(constants_1.routesPath.HOME + ':id', onlineStoreController.productDetail);
exports.default = router;
