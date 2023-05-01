import express from 'express';
import { routesPath } from '@/utils/constants';
import HomeController from '@/controllers/HomeController';
const router = express.Router();

const homeController = new HomeController();

/* GET home page. */
router.get(routesPath.HOME, homeController.home);
router.get(routesPath.STORE, homeController.store);
router.get(routesPath.BUFFET, homeController.buffet);
router.get(routesPath.COMPANY, homeController.company);
router.get(routesPath.ADDRESS.index + routesPath.ADDRESS.STORE, homeController.storeAddress);
router.get(routesPath.ADDRESS.index + routesPath.ADDRESS.BUFFET, homeController.buffetAddress);
router.get(routesPath.CONTACT, homeController.contact);

export default router;
