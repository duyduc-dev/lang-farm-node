import ProductService from '@/services/productService';
import { Handler } from 'express';
import { getLogger } from '@/utils/loggers';
import { routesPath } from '@/utils/constants';
import { productsDB } from '@/database/products';

const logger = getLogger('ONLINE_STORE_ROUTE');

export default class OnlineStoreController {
  // /online-store
  index: Handler = (_req, res) => {
    const randomProd = productsDB.map((x) => productsDB[Math.floor(Math.random() * productsDB.length)]).slice(0, 8);
    const tratuiloc = ProductService.getProductByCategory('Trà túi lọc');
    const traiCaySayDeo = ProductService.getProductByCategory('Trái cây sấy dẻo');
    const banhQuaTang = ProductService.getProductByCategory('Bánh quà tặng');
    const thitKho = ProductService.getProductByCategory('Thịt khô');

    res.render('online-store/index', {
      layout: 'layout/OnlineStoreLayout',
      randomProd,
      tratuiloc,
      traiCaySayDeo,
      banhQuaTang,
      thitKho,
    });
  };

  // /online-store/:id
  productDetail: Handler = (req, res) => {
    const id = req.params.id;
    const product = ProductService.getById(req.params.id);
    if (!id || !product) {
      return res.redirect(routesPath.ONLINE_STORE);
    }

    const productRelate = ProductService.getProductByCategory(product.category).slice(0, 6);
    res.render('online-store/productDetail', {
      layout: 'layout/OnlineStoreLayout',
      product,
      productRelate,
    });
  };

  // /online-store/auth/login
  login: Handler = (_, res) => {
    res.render('auth/login', {
      layout: 'layout/OnlineStoreLayout',
    });
  };

  // /online-store/auth/register
  register: Handler = (_, res) => {
    res.render('auth/register', {
      layout: 'layout/OnlineStoreLayout',
    });
  };
}
