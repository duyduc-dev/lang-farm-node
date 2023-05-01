import express from 'express';
import { routesPath } from '@/utils/constants';
import OnlineStoreController from '@/controllers/OnlineStoreController';
const router = express.Router();

const onlineStoreController = new OnlineStoreController();

/* GET home page. */
router.get(routesPath.HOME, onlineStoreController.index);
router.get(routesPath.HOME + ':id', onlineStoreController.productDetail);

export default router;
