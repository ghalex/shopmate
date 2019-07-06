export default class Attribute {
  public id: number;
  public name: string;
  public value: string;

  constructor(data: any) {
    this.id = data.attribute_value_id;
    this.name = data.attribute_name;
    this.value = data.attribute_value;
  }
}
