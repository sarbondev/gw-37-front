import { useEffect, useState } from "react";
import { Axios } from "../middlewares/Axios";

function Admins() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Axios.get("/users");
        const { users } = response.data;
        setData(users);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <section>
      {error && <h1>{error}</h1>}
      <table>
        <thead>
          <tr>
            <th>Ism Familiyasi</th>
            <th>Telefon raqami</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.fullName}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Admins;
