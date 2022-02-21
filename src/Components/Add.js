import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = data.find((data) => data.email === email && email);
    const checkNumber = data.find((data) => data.number === parseInt(number));
    if (!email || !number || !name) {
      return toast.warning("Plz fill all entries");
    }
    if (checkEmail) {
      return toast.error("This emiil already Exists..!!");
    }
    if (checkNumber) {
      return toast.error("This number already Exists..!!");
    }
    const data1 = {
      id: data[data.length - 1].id + 1,
      name,
      number,
      email,
    };
    dispatch({ type: "ADD_DATA", payload: data1 });
    toast.success("Data added Successfully");
    history.push("/");
  };
  return (
    <div className="container">
     
        <h1 className=" my-4" style={{ textAlign: "center" }}>
          Add Data
        </h1>
        <div
          className="col-md-6 shadow mx-auto p-5"
          style={{ textAlign: "center" }}
        >
          <div >
          <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
           
            <br />
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-block btn-dark"
              >Add Data</button>
            </div>
          </div>
        </div>
   
    </div>
  );
};

export default Add;
