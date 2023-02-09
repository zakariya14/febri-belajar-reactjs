import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Services = () => {
  const { id } = useParams();
  const [user, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => setUsers(resp.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1 className="text-center my-3">Detail Page</h1>

      <div style={{ width: 700, backgroundColor: "grey", margin: "auto", padding: 14, borderRadius: 7, color: "white" }}>
        <h3>
          detailed data for id <b>'{id}'</b> is:
        </h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <nav>
          <button className="btn btn-outline-secondary text-bg-dark">
            <Link to="/" style={{ textDecoration: "none" }}>
              back
            </Link>
          </button>
        </nav>
      </div>

      <br />
    </div>
  );
};

export default Services;
