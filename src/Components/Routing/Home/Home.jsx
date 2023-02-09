import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDetailClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div>
      <h1 className="text-center my-3">Home Page</h1>
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Username</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <div className="text-center">
                  <Button variant="outline-success" size="sm" onClick={() => handleDetailClick(user.id)}>
                    detail
                  </Button>
                </div>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
