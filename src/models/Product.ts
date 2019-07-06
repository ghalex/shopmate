import { Attribute } from "models";

export default class Product {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public discountedPrice: number;
  public thumbnail: string;
  public image: string | null;
  public image2: string | null;
  public attributes: Attribute[] = [];
  public rawData: any;

  constructor(data: any) {
    this.id = data.product_id;
    this.name = data.name;
    this.description = data.description;
    this.price = parseFloat(data.price);
    this.discountedPrice = parseFloat(data.discounted_price);
    this.thumbnail = data.thumbnail;
    this.image = data.image;
    this.image2 = data.image_2;
    this.attributes = data.attributes || [];
    this.rawData = data;
  }

  get hasDiscount(): boolean {
    return this.discountedPrice > 0;
  }
}
