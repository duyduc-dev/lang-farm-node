"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiper = void 0;
const swiper_1 = __importStar(require("swiper"));
const swiper = () => {
    const optionsSwiper = {
        loop: true,
        modules: [swiper_1.Autoplay, swiper_1.Navigation, swiper_1.Pagination],
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
        },
    };
    new swiper_1.default('#swiper-banner', Object.assign(Object.assign({}, optionsSwiper), { 
        // clickable: true,
        // Optional parameters
        direction: 'horizontal', effect: 'fade', 
        // lazy: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        } }));
    new swiper_1.default('#swiper-product', Object.assign(Object.assign({}, optionsSwiper), { 
        // clickable: true,
        // Optional parameters
        direction: 'horizontal', effect: 'fade', 
        // lazy: true,
        slidesPerView: 5, spaceBetween: 5, breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 2,
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 3,
            },
            876: {
                slidesPerView: 4,
                spaceBetween: 4,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 5,
            },
        } }));
    new swiper_1.default('#swiper-preview-product', {
        loop: true,
        modules: [swiper_1.Navigation],
        direction: 'horizontal',
        effect: 'fade',
        // lazy: true,
        // Navigation arrows
        slidesPerView: 4,
        spaceBetween: 1,
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        },
    });
};
exports.swiper = swiper;
