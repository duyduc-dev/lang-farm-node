import createError from 'http-errors';

import express, { RequestHandler, ErrorRequestHandler } from 'express';

import routerConfig from './configs/routerConfig';
import appConfig from './configs/appConfig';
import viewConfig from './configs/viewConfig';
import { productsDB } from './database/products';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.errorHandler();
  }

  private config() {
    viewConfig(this.app, __dirname);
    appConfig(this.app, __dirname);
    routerConfig(this.app);
  }

  private errorHandler() {
    // catch 404 and forward to error handler
    const requestHandler: RequestHandler = function (_req, _res, next) {
      next(createError(404));
    };
    this.app.use(requestHandler);

    // error handler
    const errorRequestHandler: ErrorRequestHandler = function (err, req, res, _next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error', { layout: false });
    };
    this.app.use(errorRequestHandler);
  }
}

export default new App().app;
