import express from 'express';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from '../services/product.service';


const app = express();
const productService = new ProductService();

const productController = new ProductController(productService);

app.use('/products', productController.router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});