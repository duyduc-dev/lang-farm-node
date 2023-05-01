"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alpinejs_1 = __importDefault(require("alpinejs"));
const rawDataBuffetPage_1 = require("./rawData/rawDataBuffetPage");
const rawDataCompanyPage_1 = require("./rawData/rawDataCompanyPage");
const rawDataContactPage_1 = require("./rawData/rawDataContactPage");
const rawDataStoreAddress_1 = require("./rawData/rawDataStoreAddress");
const rawDataOnlineStore_1 = require("./rawData/rawDataOnlineStore");
const rawDataStorePage_1 = require("./rawData/rawDataStorePage");
const rawHeader_1 = __importDefault(require("./rawData/rawHeader"));
const swiper_1 = require("./plugins/swiper");
const app = () => {
    const setState = (key, value) => {
        if (typeof key !== 'string')
            return;
        alpinejs_1.default.store(key, value);
    };
    return {
        globalState: () => {
            setState('rawHeader', rawHeader_1.default);
            setState('router', {
                pathname: location.pathname,
            });
            setState('formatMoney', (amount = 0, decimalCount = 0, decimal = '.', thousands = ',') => {
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
                const negativeSign = Number(amount) < 0 ? '-' : '';
                const i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
                const j = i.length > 3 ? i.length % 3 : 0;
                return (negativeSign +
                    (j ? i.substr(0, j) + thousands : '') +
                    i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
                    (decimalCount
                        ? decimal +
                            // @ts-ignore
                            Math.abs(amount - i)
                                .toFixed(decimalCount)
                                .slice(2)
                        : ''));
            });
        },
        header: () => {
            const header = document.querySelector('.header-page');
            if (header) {
                const elementRect = header.getBoundingClientRect();
                window.addEventListener('scroll', () => {
                    const scrollY = window.scrollY;
                    const elementTop = elementRect.top + scrollY;
                    setState('positionHeader', Math.floor(elementTop));
                });
            }
        },
        homePage: () => {
            const arrImg = Array.from(Array(16).keys()).map((i) => `/assets/images/home5/${i + 1}.jpg`);
            setState('pathArrayImage', arrImg);
            const arrImg2 = Array.from(Array(12).keys()).map((i) => `/assets/images/home6/${i + 1}.jpg`);
            setState('pathArrayImage2', arrImg2);
        },
        storePage: () => {
            setState('cards', rawDataStorePage_1.cards);
            setState('cards2', rawDataStorePage_1.cards2);
        },
        buffetPage: () => {
            setState('salientFeatures', rawDataBuffetPage_1.salientFeatures);
            setState('menuBuffet', rawDataBuffetPage_1.menuBuffet);
        },
        companyPage: () => {
            setState('findOutMore', rawDataCompanyPage_1.findOutMore);
        },
        addressPage: () => {
            setState('storeAddress', rawDataStoreAddress_1.storeAddress);
            setState('buffetAddress', rawDataStoreAddress_1.buffetAddress);
        },
        contactPage: () => {
            setState('contact', rawDataContactPage_1.contact);
            setState('addressCompany', rawDataContactPage_1.addressCompany);
        },
        onlineStorePage: () => {
            setState('categories', rawDataOnlineStore_1.categories);
            setState('sellingProduct', rawDataOnlineStore_1.sellingProduct);
            setState('tratuiloc', rawDataOnlineStore_1.tratuiloc);
            setState('saydeo', rawDataOnlineStore_1.saydeo);
            setState('banhquatang', rawDataOnlineStore_1.banhquatang);
            (0, swiper_1.swiper)();
        },
        init() {
            this.globalState();
            this.header();
            this.homePage();
            this.storePage();
            this.buffetPage();
            this.companyPage();
            this.addressPage();
            this.contactPage();
            this.onlineStorePage();
        },
    };
};
exports.default = app;
