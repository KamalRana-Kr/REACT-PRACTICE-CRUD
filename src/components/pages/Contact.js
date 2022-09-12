import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Page</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Add Your Email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Description
            </label>
            <textarea
              type="textarea"
              className="form-control"
              id="exampleInputText1"
              placeholder="Add Description"
            />
          </div>
          {/* <div className="mb-3 form-check">
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
          </div> */}
          <button
            type="submit"
            className="btn btn-light"
            style={{ backgroundColor: "#00BFFF" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
