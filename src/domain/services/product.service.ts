
import { Product } from '../models/product';
import { products } from '../../infra/productsMock';

export class ProductService {
  async getAllProducts(): Promise<Product[]> {
    return products;
  }

  async getProductById(productId: string): Promise<Product | undefined> {
    return products.find((product) => product.id === productId);
  }

  async createProduct(product: Product): Promise<Product> {
    const newProduct = { ...product, id: Math.random().toString() };
    products.push(newProduct);
    return newProduct;
  }

  async updateProduct(productId: string, product: Product): Promise<Product | undefined> {
    const index = products.findIndex((product) => product.id === productId);
    if (index !== -1) {
      products[index] = { ...product, id: productId };
      return products[index];
    }
    return undefined;
  }

  async deleteProduct(productId: string): Promise<void> {
    const index = products.findIndex((product) => product.id === productId);
    if (index !== -1) {
      products.splice(index, 1);
    }
  }
}