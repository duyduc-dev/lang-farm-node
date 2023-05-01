"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../utils/constants");
const rawHeader = [
    {
        title: 'trang chủ',
        html: constants_1.routesPath.HOME,
        active: true,
    },
    {
        title: 'store',
        html: constants_1.routesPath.STORE,
    },
    {
        title: 'buffet',
        html: constants_1.routesPath.BUFFET,
    },
    {
        title: 'công ty',
        html: constants_1.routesPath.COMPANY,
    },
    {
        title: 'Địa chỉ',
        html: false,
        children: [
            {
                title: 'địa chỉ store',
                html: `${constants_1.routesPath.ADDRESS.index}${constants_1.routesPath.ADDRESS.STORE}`,
            },
            {
                title: 'địa chỉ buffet',
                html: `${constants_1.routesPath.ADDRESS.index}${constants_1.routesPath.ADDRESS.BUFFET}`,
            },
        ],
    },
    {
        title: 'liên hệ',
        html: constants_1.routesPath.CONTACT,
    },
    {
        title: 'mua hàng online',
        html: constants_1.routesPath.ONLINE_STORE,
    },
];
exports.default = rawHeader;
