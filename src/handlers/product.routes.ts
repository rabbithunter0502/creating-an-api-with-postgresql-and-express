import {ProductStore} from "../models/product.model";
import express, {Request, Response} from "express";


export class ProductRoutes {
    static productStore = new ProductStore();
    async index(req: Request, res: Response) {

    }


}
