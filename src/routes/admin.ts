import express from 'express';
import { routesPath } from '@/utils/constants';
import AdminController from '@/controllers/AdminController';
const router = express.Router();

const adminController = new AdminController();

router.get(routesPath.ADMIN_DASHBOARD, adminController.dashboard);
router.get(routesPath.ADMIN_PRODUCTS, adminController.products);
router.get(routesPath.ADMIN_PRODUCTS + '/:id', adminController.productDetail);
router.get(routesPath.ADMIN_LOGIN, adminController.login);
router.get('/orders', adminController.orders);
router.get('/customers', adminController.customers);

export default router;
