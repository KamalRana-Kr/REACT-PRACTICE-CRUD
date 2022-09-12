import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();

  const [users, setUser] = useState([]);

  //useEffect page loader adding until all data fetched properly.
  useEffect(() => {
    //this loader funtion is fetch all users
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
    history("/");
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <NavLink
                    className="btn m-1"
                    to={`/user/details/${user.id}`}
                    style={{ backgroundColor: "#00BFFF" }}
                  >
                    View
                  </NavLink>
                  <NavLink
                    className="btn btn-dark m-1"
                    to={`/user/edit/${user.id}`}
                  >
                    Edit
                  </NavLink>
                  <NavLink
                    className="btn btn-danger m-1"
                    to={"/"}
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
