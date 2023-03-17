import { MockObject } from '@Mocks/mockObject';

export class GetCartProductsMock extends MockObject {
    public constructor() {
        super();
        this.path = {
            url: '*/dmitrymaks252/products',
            method: 'get',
        };
    }

    public getFixture(): Record<string, unknown>[] {
        return [
            {
                id: 1,
                imgUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
                price: 109.95,
                quantity: 3,
            },
            {
                id: 2,
                imgUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
                name: 'Mens Casual Premium Slim Fit T-Shirts ',
                price: 22.3,
                quantity: 6,
            },
            {
                id: 3,
                imgUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
                name: 'Mens Cotton Jacket',
                price: 55.99,
                quantity: 2,
            },
            {
                id: 4,
                imgUrl: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
                name: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',
                price: 999.99,
                quantity: 1,
            },
            {
                id: 5,
                imgUrl: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
                name: 'Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin',
                price: 599,
                quantity: 2,
            },
        ];
    }
}
