"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("@/utils/constants");
const HomeController_1 = __importDefault(require("@/controllers/HomeController"));
const router = express_1.default.Router();
const homeController = new HomeController_1.default();
/* GET home page. */
router.get(constants_1.routesPath.HOME, homeController.home);
router.get(constants_1.routesPath.STORE, homeController.store);
router.get(constants_1.routesPath.BUFFET, homeController.buffet);
router.get(constants_1.routesPath.COMPANY, homeController.company);
router.get(constants_1.routesPath.ADDRESS.index + constants_1.routesPath.ADDRESS.STORE, homeController.storeAddress);
router.get(constants_1.routesPath.ADDRESS.index + constants_1.routesPath.ADDRESS.BUFFET, homeController.buffetAddress);
router.get(constants_1.routesPath.CONTACT, homeController.contact);
exports.default = router;
