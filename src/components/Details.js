import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const users = await res.json();
    setData(users);
  };
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <p>{`${data.name} (${data.username})`}</p>
      <p>
        {data.email} <br />
        {data.phone}
        <br />
        {data.website} <br />
        {`${data.address.suite}, ${data.address.street}, ${data.address.city}, ${data.address.zipcode}`}
      </p>
      <p>
        Works At: {data.company.name}
        <br />
        {data.company.catchPhrase}
        <br />
        {data.company.bs}
      </p>
    </div>
  );
};

export default Details;
