export interface ProductData {
  product_id: number;
  name: string;
  description: string;
  price: number;
  discounted_price: number;
  thumbnail: string;
}

export default class Product {
  private rawData: ProductData;

  constructor(data: ProductData) {
    this.rawData = data;
  }

  get data() {
    return { ...this.rawData };
  }

  get id() {
    return this.rawData.product_id;
  }

  get hasDiscount(): boolean {
    return this.rawData.discounted_price > 0;
  }
}
