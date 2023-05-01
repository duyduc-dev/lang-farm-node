"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggers_1 = require("@/utils/loggers");
const logger = (0, loggers_1.getLogger)('INDEX_ROUTE');
class HomeController {
    constructor() {
        // (/)
        this.home = (_req, res, _next) => {
            logger.info('hello Express');
            res.render('index', { banner: '/assets/images/banner.jpg' });
        };
        // /store-vn
        this.store = (_req, res) => {
            res.render('store', { banner: '/assets/images/banner.jpg' });
        };
        // /buffet-vn
        this.buffet = (_req, res) => {
            res.render('buffet', { banner: '/assets/images/banner2.jpg' });
        };
        // /company
        this.company = (_req, res) => {
            res.render('company', { banner: '/assets/images/banner10.jpg' });
        };
        // /address/store-address
        this.storeAddress = (_req, res) => {
            res.render('address/store-address', { banner: '/assets/images/banner14.jpg' });
        };
        // /address/buffet-address
        this.buffetAddress = (_req, res) => {
            res.render('address/buffet-address', { banner: '/assets/images/banner16.jpg' });
        };
        // /contact
        this.contact = (_req, res) => {
            res.render('contact', { banner: '/assets/images/banner15.jpg' });
        };
    }
}
exports.default = HomeController;
