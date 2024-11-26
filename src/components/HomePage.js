import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    setData(users);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link to={`/details/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HomePage;
