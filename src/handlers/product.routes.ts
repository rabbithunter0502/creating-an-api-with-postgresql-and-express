import {Product, ProductStore} from "models/product.model";
import express, {Application, Request, Response} from "express";

class ProductRoutes {
    static #productStore = new ProductStore();
    #app: Application;
    constructor(app: Application) {
        this.#app = app;
    }

    async index(req: Request, res: Response) {
        console.log(this);
        const products = await ProductRoutes.#productStore.index();
        res.json(products)
    }

    async show(req: Request, res: Response) {
        const products = await ProductRoutes.#productStore.index();
        res.json(products)
    }

    async create(req: Request, res: Response) {
        const products = await ProductRoutes.#productStore.index();
        res.json(products)
    }

    async edit(req: Request, res: Response) {
        const products = await ProductRoutes.#productStore.index();
        res.json(products)
    }

    async remove(req: Request, res: Response) {
        const removed = await ProductRoutes.#productStore.edit(req.body.product);
    }

    productRoutes() {
        this.#app.get('/products', this.index.bind(ProductRoutes));
        this.#app.get('/products/:id', this.show.bind(ProductRoutes));
        this.#app.post('/products', this.create.bind(ProductRoutes));
        this.#app.put('/products', this.edit.bind(ProductRoutes));
        this.#app.delete('/products', this.remove.bind(ProductRoutes));
    }
}

export default ProductRoutes;
