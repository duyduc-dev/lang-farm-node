import { Application } from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';

export default function viewConfig(app: Application, __dirname: any) {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.use(expressLayouts);
  app.set('layout', 'layout/MainLayout');
}
