//  1. Intersection Types (Kiểu Giao nhau)

interface IPerson {
  name: string;
  age: number;
}

interface IUser {
  role: string;
}

// IPerson + IUser: &
// C1: type
type IEmployee = IPerson & IUser;

const e1: IEmployee = {
  name: "NV1",
  age: 20,
  role: "user",
};
// C2: extends
interface IEmployee2 extends IPerson, IUser {}

// 2.  Discriminated Unions (Liên minh Phân biệt)

type IStaff = IPerson | IUser;

const staff1: IStaff = {
  name: "staff1",
  age: 20,
};

// 3 Extends: interface
interface IManager extends IPerson {
  role: string;
  dept: string;
}

const m1: IManager = {
  name: "M1",
  age: 30,
  role: "manager",
  dept: "HR",
};
