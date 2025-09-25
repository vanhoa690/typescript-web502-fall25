class Person {
  public name: string; // đọc và ghi ở trong hoặc ngoài class
  protected gender: boolean; // chỉ đọc và ghi ở trong class và class kế thừa
  private age: number; // chỉ đọc và ghi ở trong chính class đó
  readonly point: number;

  constructor(name: string, age: number, gender: boolean, point: number) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.point = point;
  }

  say(): string {
    return `hello ${this.name}`;
  }
}

const p1 = new Person("hoadv", 36, true, 10);
const result = p1.say();
console.log(result);
console.log(p1.name);

// Ke thua: extends
class User extends Person {
  public role: string;
  constructor(
    name: string,
    age: number,
    gender: boolean,
    point: number,
    role: string
  ) {
    super(name, age, gender, point); // super goi tu cha
    this.role = role;
  }

  //override: ghi de method cua cha
  say(): string {
    return `xin chao ${this.name}`;
  }
}

const u1 = new User("hoadv", 36, true, 10, "admin");
u1.name;
console.log(u1.say());

//  interface : object
interface IPerson {
  name: string;
  age: number;
  gender: boolean;
  role: string;
  say(): void;
}
