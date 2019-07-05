export default class Category {
  public id: number;
  public name: string;
  public description: string;
  public departmentId: number;

  constructor(data: any) {
    this.id = data.category_id;
    this.name = data.name;
    this.description = data.description;
    this.departmentId = data.department_id;
  }
}
