import { Handler } from 'express';

import { getLogger } from '@/utils/loggers';
import ProductService from '@/services/productService';
const logger = getLogger('INDEX_ROUTE');

class HomeController {
  // (/)
  home: Handler = (_req, res, _next) => {
    logger.info('hello Express');

    res.render('index', { banner: '/assets/images/banner.jpg' });
  };

  // /store-vn
  store: Handler = (_req, res) => {
    res.render('store', { banner: '/assets/images/banner.jpg' });
  };

  // /buffet-vn
  buffet: Handler = (_req, res) => {
    res.render('buffet', { banner: '/assets/images/banner2.jpg' });
  };

  // /company
  company: Handler = (_req, res) => {
    res.render('company', { banner: '/assets/images/banner10.jpg' });
  };

  // /address/store-address
  storeAddress: Handler = (_req, res) => {
    res.render('address/store-address', { banner: '/assets/images/banner14.jpg' });
  };

  // /address/buffet-address
  buffetAddress: Handler = (_req, res) => {
    res.render('address/buffet-address', { banner: '/assets/images/banner16.jpg' });
  };

  // /contact
  contact: Handler = (_req, res) => {
    res.render('contact', { banner: '/assets/images/banner15.jpg' });
  };
}

export default HomeController;
