"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("@/database/products");
const ProductService = {
    getProductByCategory(category) {
        return products_1.productsDB.filter((x) => x.category === category);
    },
    getById(id) {
        return products_1.productsDB.find((x) => x.id === id);
    },
};
exports.default = ProductService;
