export default class User {
  public id: number;
  public name: string;
  public email: string;
  public address: string;
  private rawData: any;

  constructor(data: any) {
    this.id = data.customer_id;
    this.name = data.name;
    this.email = data.email;
    this.address = data.address_1;
    this.rawData = data;
  }
}
