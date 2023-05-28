import { productsDB } from '@/database/products';
import { CategoryModel, ProductModel } from '@/models/product';

const ProductService = {
  getProductByCategory(category: CategoryModel) {
    return productsDB.filter((x) => x.category === category);
  },

  getById(id: string): ProductModel | undefined {
    return productsDB.find((x) => x.id === id);
  },

  getAll(): ProductModel[] {
    return productsDB || [];
  },
};

export default ProductService;
