import { Router, Request, Response } from 'express';
import { ProductService } from '../../../services/product.service';

export class ProductController {
    public router = Router();
    private readonly productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;

        this.router.get('/', this.index.bind(this));
    }

    async index(request: Request, response: Response): Promise<Response> {
        const products = await this.productService.getAllProducts();

        return response.json(products);
    }
}