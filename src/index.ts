import express from 'express';
import { ProductController } from './domain/presentation/controllers/product/product.controller';
import { ProductService } from './domain/services/product.service';

const app = express();
const productService = new ProductService();
const productController = new ProductController(productService);

app.use(express.json());
app.use('/products', productController.router);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});