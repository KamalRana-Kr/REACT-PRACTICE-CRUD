import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:3003/users/${id}`);
      setUser(result.data);
    };

    loadUser();
  }, [id]);

  return (
    <div className="container">
      <NavLink className="btn btn-dark" to="/">
        back to home
      </NavLink>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">FirstName: {user.first_name}</li>
        <li className="list-group-item">LastName: {user.last_name}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
    </div>
  );
};
export default ViewUser;
