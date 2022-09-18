import dbInstance from "../database";

export class Product {
    //#region properties
    public id: number;

    public name: string;

    public price: number;

    public category: string;
    //#endregion

    //#region  constructor
    constructor() {}
    //#endregion
}

export class ProductStore {
    async Index(): Promise<Product[]> {
        try {
            const sql = 'SELECT * FROM Products';
            return this.#queryToDB<Product[]>(sql);
        } catch (error) {
            throw new Error(`Cannot get Product: ${error}`)
        }
    }

    async Show(id: string): Promise<Product> {
        try {
            const sql = `SELECT * FROM Products WHERE id=${id}`;
            const result = await this.#queryToDB<Product[]>(sql);
            return result[0];
        } catch (error) {
            throw new Error(`Cannot get Product by id: ${error}`)
        }
    }

    async Create(product: Product): Promise<Product> {
        try {
            const sql = `INSERT INTO products(name, price, category) values ('${product.name}', ${product.price}, '${product.category}')`;
            const result = await this.#queryToDB<Product[]>(sql);
            return result[0];
        } catch (error) {
            throw new Error(`Cannot create Product: ${error}`)
        }
    }
    async GetProductByCategory(category: string): Promise<Product[]> {
        try {
            const sql = ``;
            return await this.#queryToDB<Product[]>(sql);
        } catch (error) {
            throw new Error(`Cannot get Product by category : ${error}`)
        }
    }

    async GetTopPopularProduct(size: number): Promise<Product[]> {
        try {
            const sql = ``;
            return await this.#queryToDB<Product[]>(sql);
        } catch (error) {
            throw new Error(`Cannot get top popular product : ${error}`)
        }
    }

    async #queryToDB<ResultType>(sql: string): Promise<ResultType> {
        try {
            const conn = await dbInstance.connect();
            const result = await conn.query(sql);
            conn.release();
            return result.rows as ResultType
        } catch (error) {
            throw new Error(`Something went wrong ${error}`);
        }
    }
}

// CREATE TABLE products(
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(150),
//     price real,
//     category VARCHAR(100)
// )
