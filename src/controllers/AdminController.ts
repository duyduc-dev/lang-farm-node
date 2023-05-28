import { Handler } from 'express';

import ProductService from '@/services/productService';

export default class AdminController {
  dashboard: Handler = (_, res) => {
    res.render('admin/dashboard', {
      layout: 'layout/admin/layout',
    });
  };

  products: Handler = (_, res) => {
    res.render('admin/products', {
      layout: 'layout/admin/layout',
      products: ProductService.getAll(),
    });
  };

  orders: Handler = (_, res) => {
    res.render('admin/orders', {
      layout: 'layout/admin/layout',
    });
  };

  customers: Handler = (_, res) => {
    res.render('admin/customers', {
      layout: 'layout/admin/layout',
    });
  };

  productDetail: Handler = (req, res) => {
    const id = req.params.id;
    const product = ProductService.getById(req.params.id);
    if (!id || !product) {
      return res.redirect('/admin/products');
    }

    res.render('admin/product-detail', {
      layout: 'layout/admin/layout',
      product,
    });
  };

  login: Handler = (_, res) => {
    res.render('admin/login', {
      layout: false,
    });
  };
}
