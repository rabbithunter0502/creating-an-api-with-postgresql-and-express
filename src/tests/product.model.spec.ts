import {Product, ProductStore} from "models/product.model";

const productStore = new ProductStore();

describe('Product model', () => {
    it('index method should be defined', async () => {
        const newProduct = new Product();
        newProduct.name = 'baby toy';
        newProduct.price = 1;
        newProduct.category = 'toy';
        const creatNewRecord = await productStore.create(newProduct);
        const res = await productStore.show('1');
        expect(res).toBeTruthy();
    })
});
