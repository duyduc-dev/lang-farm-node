import { Application } from 'express';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';

export default function appConfig(app: Application, __dirname: any) {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
}
