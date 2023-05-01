"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("@/services/productService"));
const loggers_1 = require("@/utils/loggers");
const constants_1 = require("@/utils/constants");
const logger = (0, loggers_1.getLogger)('ONLINE_STORE_ROUTE');
class OnlineStoreController {
    constructor() {
        // /online-store
        this.index = (_req, res) => {
            const tratuiloc = productService_1.default.getProductByCategory('Trà túi lọc');
            const traiCaySayDeo = productService_1.default.getProductByCategory('Trái cây sấy dẻo');
            const banhQuaTang = productService_1.default.getProductByCategory('Bánh quà tặng');
            const thitKho = productService_1.default.getProductByCategory('Thịt khô');
            res.render('online-store/index', {
                layout: 'layout/OnlineStoreLayout',
                tratuiloc,
                traiCaySayDeo,
                banhQuaTang,
                thitKho,
            });
        };
        this.productDetail = (req, res) => {
            const id = req.params.id;
            const product = productService_1.default.getById(req.params.id);
            if (!id || !product) {
                return res.redirect(constants_1.routesPath.ONLINE_STORE);
            }
            const productRelate = productService_1.default.getProductByCategory(product.category).slice(0, 6);
            res.render('online-store/productDetail', {
                layout: 'layout/OnlineStoreLayout',
                product,
                productRelate,
            });
        };
    }
}
exports.default = OnlineStoreController;
