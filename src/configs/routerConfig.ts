import { Application } from 'express';

import indexRouter from '@/routes/index';
import onlineStoreRouter from '@/routes/online-store';
import adminRouter from '@/routes/admin';

import { routesPath } from '@/utils/constants';

const routerConfig = (app: Application) => {
  app.use(routesPath.HOME, indexRouter);
  app.use(routesPath.ONLINE_STORE, onlineStoreRouter);
  app.use(routesPath.ADMIN, adminRouter);
};
export default routerConfig;
