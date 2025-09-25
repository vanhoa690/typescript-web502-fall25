class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say() {
    return "hello";
  }
}

const p1 = new Person("hoadv", 36);
