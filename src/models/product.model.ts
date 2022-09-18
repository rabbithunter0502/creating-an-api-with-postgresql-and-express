import dbInstance from 'provider/database';

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
    async index(): Promise<Product[]> {
        try {
            const sql = 'SELECT * FROM Products';
            return this.#queryToDB<Product[]>(sql);
        } catch (error) {
            throw new Error(`Cannot get Product: ${error}`)
        }
    }

    async show(id: string): Promise<Product> {
        try {
            const sql = `SELECT * FROM Products WHERE id=${id}`;
            const result = await this.#queryToDB<Product[]>(sql);
            return result[0];
        } catch (error) {
            throw new Error(`Cannot get Product by id: ${error}`)
        }
    }

    async create(product: Product): Promise<Product> {
        try {
            const sql = `INSERT INTO products(name, price, category) values ('${product.name}', ${product.price}, '${product.category}')`;
            const result = await this.#queryToDB<Product[]>(sql);
            return result[0];
        } catch (error) {
            throw new Error(`Cannot create Product: ${error}`)
        }
    }

    async getProductByCategory(category: string): Promise<Product[]> {
        try {
            const sql = ``;
            return await this.#queryToDB<Product[]>(sql);
        } catch (error) {
            throw new Error(`Cannot get Product by category : ${error}`)
        }
    }

    async getTopPopularProduct(size: number): Promise<Product[]> {
        try {
            const sql = ``;
            return await this.#queryToDB<Product[]>(sql);
        } catch (error) {
            throw new Error(`Cannot get top popular product : ${error}`)
        }
    }

    async edit(product: Product): Promise<Product> {
        try {
            const sql = `UPDATE Product SET (name, price, category)
            = ('${product.name}', ${product.price}, '${product.category}') WHERE id = ${product.id}`;
            const result = await this.#queryToDB<Product[]>(sql);
            return result[0];
        } catch (error) {
            throw new Error(`Cannot update Product: ${error}`)
        }
    }

    async remove(id: string): Promise<Product> {
        try {
            const sql = `DELETE * FROM Product WHERE id=${id}`;
            const result = await this.#queryToDB<Product[]>(sql);
            return result[0];
        } catch (error) {
            throw new Error(`Cannot delete Product by id: ${error}`)
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

