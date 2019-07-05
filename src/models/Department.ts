export default class Department {
  public id: number;
  public name: string;
  public description: string;

  constructor(data: any) {
    this.id = data.department_id;
    this.name = data.name;
    this.description = data.description;
  }
}
