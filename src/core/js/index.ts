import Alpine from 'alpinejs';

import app from './app';
const bootstrap = () => {
  app().init();
  Alpine.start();
};

bootstrap();
