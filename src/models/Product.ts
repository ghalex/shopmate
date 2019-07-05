export default class Product {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public discountedPrice: number;
  public thumbnail: string;

  constructor(data: any) {
    this.id = data.product_id;
    this.name = data.name;
    this.description = data.description;
    this.price = parseFloat(data.price);
    this.discountedPrice = parseFloat(data.discounted_price);
    this.thumbnail = data.thumbnail;
  }

  get hasDiscount(): boolean {
    return this.discountedPrice > 0;
  }
}
