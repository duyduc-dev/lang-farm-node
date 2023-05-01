import ProductService from '@/services/productService';
import { Handler } from 'express';
import { getLogger } from '@/utils/loggers';
import { routesPath } from '@/utils/constants';

const logger = getLogger('ONLINE_STORE_ROUTE');

export default class OnlineStoreController {
  // /online-store
  index: Handler = (_req, res) => {
    const tratuiloc = ProductService.getProductByCategory('Trà túi lọc');
    const traiCaySayDeo = ProductService.getProductByCategory('Trái cây sấy dẻo');
    const banhQuaTang = ProductService.getProductByCategory('Bánh quà tặng');
    const thitKho = ProductService.getProductByCategory('Thịt khô');

    res.render('online-store/index', {
      layout: 'layout/OnlineStoreLayout',
      tratuiloc,
      traiCaySayDeo,
      banhQuaTang,
      thitKho,
    });
  };

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
}
