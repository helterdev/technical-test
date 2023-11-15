export interface Products {
    photo: string;
    name: string;
    id: number;
    price: string;
    quantity: number;
}

export interface initialStateCart {
    cart: Products[],
    count: number;
}

