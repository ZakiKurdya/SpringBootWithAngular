export class Student{
  declare  id: number;
  declare  name: string;
  declare   major: string;
  declare  grade: number;

  constructor(id: number, name: string, major: string, grade: number) {
    this.id = id;
    this.name = name;
    this.major = major;
    this.grade = grade;
  }
}
