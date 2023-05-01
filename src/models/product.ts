export type CategoryModel =
  | 'Trà túi lọc'
  | 'Trái cây sấy dẻo'
  | 'Bánh quà tặng'
  | 'Bánh mứt đặc sản'
  | 'Cà phê'
  | 'Thảo mộc'
  | 'Trái cây sấy giòn'
  | 'Trà pha ấm'
  | 'Hạt đặc sản'
  | 'Bột nông sản'
  | 'Matcha & sencha'
  | 'Thịt khô';

export interface ProductModel {
  id: string;
  title: string;
  price: number;
  outstanding_feature: string;
  description: string;
  thumbnails: string[];
  category: CategoryModel;
  branch: string;
}
