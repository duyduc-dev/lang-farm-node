import { routesPath } from '../../../utils/constants';

const rawHeader = [
  {
    title: 'trang chủ',
    html: routesPath.HOME,
    active: true,
  },
  {
    title: 'store',
    html: routesPath.STORE,
  },
  {
    title: 'buffet',
    html: routesPath.BUFFET,
  },
  {
    title: 'công ty',
    html: routesPath.COMPANY,
  },
  {
    title: 'Địa chỉ',
    html: false,
    children: [
      {
        title: 'địa chỉ store',
        html: `${routesPath.ADDRESS.index}${routesPath.ADDRESS.STORE}`,
      },
      {
        title: 'địa chỉ buffet',
        html: `${routesPath.ADDRESS.index}${routesPath.ADDRESS.BUFFET}`,
      },
    ],
  },
  {
    title: 'liên hệ',
    html: routesPath.CONTACT,
  },
  {
    title: 'mua hàng online',
    html: routesPath.ONLINE_STORE,
  },
];

export default rawHeader;
