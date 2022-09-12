import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const loadUser = async () => {
  //   const result = await axios.get(`http://localhost:3003/users/${id}`);
  //   console.log("my cadar", result);
  // };

  // useEffect((loadUser = loadUser) => {
  //   loadUser();
  // }, []);

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:3003/users/${id}`);
      console.log(result);
      setUser(result.data);
    };

    loadUser();
  }, [id]);

  const onSubmit = async (e) => {
    //default behaviour stoping
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your FirstName"
              name="first_name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your LastName"
              name="last_name"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your WebSite"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block m-3">Edit User</button>
        </form>
      </div>
    </div>
  );
};
export default Edituser;
