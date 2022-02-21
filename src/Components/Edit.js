import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector((state) => state);
  const currentData = data.find((data) => data.id === parseInt(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = data.find(
      (data) => data.id !== parseInt(id) && data.email === email
    );
    const checkNumber = data.find(
      (data) => data.id !== parseInt(id) && data.number === parseInt(number)
    );
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
      id: parseInt(id),
      name,
      number,
      email,
    };
    dispatch({ type: "UPDATE_DATA", payload: data1 });
    toast.success("Data Updated Successfully");
    history.push("/");
  };

  useEffect(() => {
    if (currentData) {
      setName(currentData.name);
      setEmail(currentData.email);
      setNumber(currentData.number);
    }
  }, [currentData]);

  return (
    <div className="container">
      {currentData ? (
        <>
          <div className="row">
            <h1 className="display-3 my-4" style={{ textAlign: "center" }}>
              Edit Data {id}
            </h1>
            <div
              className="col-md-6 shadow mx-auto p-5"
              style={{ textAlign: "center" }}
            >
              <div>
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
                <div className="form-group">
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
                <div className="form-group" style={{ textAlign: "left" }}>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-dark"
                  >Update Data</button>
                  <Link to="/" className="btn btn-danger mx-3">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Data with id {id} not exists..!!
        </h1>
      )}
    </div>
  );
};

export default Edit;
