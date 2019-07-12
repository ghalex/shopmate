export default class CartItem {
  public id: number;
  public name: string;
  public attributes: string;
  public productId: number;
  public image: string;
  public price: number;
  public quantity: number;
  public subtotal: number;
  public rawValue: any;

  constructor(data: any) {
    this.id = data.item_id;
    this.name = data.name;
    this.attributes = data.attributes;
    this.productId = data.product_id;
    this.image = data.image;
    this.price = parseFloat(data.price);
    this.quantity = parseInt(data.quantity, 10);
    this.subtotal = parseFloat(data.subtotal);
    this.rawValue = data;
  }
}
