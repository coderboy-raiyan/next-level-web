class Person {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `name : ${this.name} and age : ${this.age}`;
  }
}

class Students extends Person {
  protected grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getGrade() {
    return this.grade;
  }
}
