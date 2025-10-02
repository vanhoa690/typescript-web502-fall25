import { useEffect, useState } from "react";

type UserType = {
  id: string;
  name: string;
  phone: string;
  website: string;
};
const initUser: UserType = {
  id: "",
  name: "",
  phone: "",
  website: "",
};

function MyUseEffect() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [id, setId] = useState<string>("");
  const [user, setUser] = useState<UserType>(initUser);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      // console.log(res);
      const data = await res.json();
      console.log(data);
      if (data) {
        setUsers(data);
      }
    }

    getData();
  }, []);

  // console.log(id);

  useEffect(() => {
    const getUserById = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      // console.log(data);
      if (data) setUser(data);
    };

    getUserById();
  }, [id]); // mỗi lần id thay đổi thì callback sẽ gọi lại

  return (
    <>
      <h1>useEffect</h1>
      <ul>
        {users.map((item: UserType) => {
          return (
            <li
              onClick={() => {
                // console.log(item.id);
                setId(item.id);
              }}
              key={item.id}
            >
              {item.id}. {item.name}|{item.phone}
            </li>
          );
        })}
      </ul>

      <h1>Thông tin chi tiết</h1>
      <h3>Họ và tên: {user.name}</h3>
      <h5>Số điện thoại: {user.phone}</h5>
      <h5>Website: {user.website}</h5>
    </>
  );
}

export default MyUseEffect;
