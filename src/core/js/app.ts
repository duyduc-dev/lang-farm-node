import Alpine from 'alpinejs';
import { menuBuffet, salientFeatures } from './rawData/rawDataBuffetPage';
import { findOutMore } from './rawData/rawDataCompanyPage';
import { addressCompany, contact } from './rawData/rawDataContactPage';
import { buffetAddress, storeAddress } from './rawData/rawDataStoreAddress';
import { banhquatang, categories, saydeo, sellingProduct, tratuiloc } from './rawData/rawDataOnlineStore';
import { cards, cards2 } from './rawData/rawDataStorePage';
import rawHeader from './rawData/rawHeader';
import { swiper } from './plugins/swiper';

const app = () => {
  const setState = (key: string, value: any) => {
    if (typeof key !== 'string') return;
    Alpine.store(key, value);
  };

  return {
    globalState: () => {
      setState('rawHeader', rawHeader);
      setState('router', {
        pathname: location.pathname,
      });
      setState('formatMoney', (amount: string | number = 0, decimalCount = 0, decimal = '.', thousands = ',') => {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = Number(amount) < 0 ? '-' : '';

        const i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
        const j = i.length > 3 ? i.length % 3 : 0;

        return (
          negativeSign +
          (j ? i.substr(0, j) + thousands : '') +
          i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
          (decimalCount
            ? decimal +
              // @ts-ignore
              Math.abs(amount - i)
                .toFixed(decimalCount)
                .slice(2)
            : '')
        );
      });
    },

    header: () => {
      const header = document.querySelector('.header-page');
      if (header) {
        const elementRect = header.getBoundingClientRect();

        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          const elementTop = elementRect.top + scrollY;
          setState('positionHeader', Math.floor(elementTop));
        });
      }
    },

    homePage: () => {
      const arrImg = Array.from(Array(16).keys()).map((i) => `/assets/images/home5/${i + 1}.jpg`);
      setState('pathArrayImage', arrImg);
      const arrImg2 = Array.from(Array(12).keys()).map((i) => `/assets/images/home6/${i + 1}.jpg`);
      setState('pathArrayImage2', arrImg2);
    },

    storePage: () => {
      setState('cards', cards);
      setState('cards2', cards2);
    },

    buffetPage: () => {
      setState('salientFeatures', salientFeatures);
      setState('menuBuffet', menuBuffet);
    },

    companyPage: () => {
      setState('findOutMore', findOutMore);
    },

    addressPage: () => {
      setState('storeAddress', storeAddress);
      setState('buffetAddress', buffetAddress);
    },

    contactPage: () => {
      setState('contact', contact);
      setState('addressCompany', addressCompany);
    },

    onlineStorePage: () => {
      setState('categories', categories);
      setState('sellingProduct', sellingProduct);
      setState('tratuiloc', tratuiloc);
      setState('saydeo', saydeo);
      setState('banhquatang', banhquatang);
      swiper();
    },

    init() {
      this.globalState();
      this.header();
      this.homePage();
      this.storePage();
      this.buffetPage();
      this.companyPage();
      this.addressPage();
      this.contactPage();
      this.onlineStorePage();
    },
  };
};

export default app;
