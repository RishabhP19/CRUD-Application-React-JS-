import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BsListTask} from 'react-icons/bs';
import { HiViewGrid} from 'react-icons/hi';
import { AiOutlineCloudUpload} from 'react-icons/ai';
import { FiEdit} from 'react-icons/fi';
import { MdOutlineDeleteOutline} from 'react-icons/md';

import card from "./Image/card.png"
import SideBar from "./SideBar";
import MiniDiv from "./MiniDiv";

const Home = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteData = (id) => {
    dispatch({ type: "DELETE_DATA", payload: id });
    toast.success("Data Deleted..!!");
  };
  const [sidebar1,setSidebar1]=useState(true)

  return (
    <div className="container-fluid">
    <div className="Home_Wrap">
        {sidebar1?<SideBar setSidebar1={setSidebar1} sidebar1={sidebar1}/> :<MiniDiv setSidebar2={setSidebar1} sidebar2={sidebar1}/>}
       
      
      <div className={sidebar1?"Home_cont":"Home_cont1"}  />
      <div className={sidebar1?"HomePage":"HomePage1"}>
      <div className={sidebar1?"search_palce":"search_palce1"} >
            <form>
              <div className="buttonSubmit">Search</div>
              <input
                type="search"
              
                placeholder="Search Data..."
              />
            </form>
          </div>
      <div className="container">
      <div className="row">
        <div style={{display:"flex",marginTop:"40px"}}>
          <h4 className="dash">
            Dashboard
            </h4>        
          <div className="add_">
          <HiViewGrid className="add_icon"/>
            <BsListTask className="add_icon"/>
            
          <Link to="/add" className="btn btn-primary">
            Add data <AiOutlineCloudUpload style={{fontSize:"25px",marginLeft:"10px"}}/>
          </Link>
        </div>
        </div>
        
        <div className="container">
          <div className="card">
          <h1 className="card_text">Welcom back Rishabh..!!</h1>
          <h6 className="card_text2">
            Application based upon React JS and Redux, containing all CRUD app features (ADD/UPDATE/DELETE)...
          </h6>
          <img src={card} alt="Rock Type" className="card_img" />
          </div>
          <table className="table table-hover">
            <thead>
        <tr style={{marginBottom:"100px"}}>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, id) => (
                <tr key={id}>
                  <td style={{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"  }}>{id + 1}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.number}</td>
                  <td style={{display:"flex",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>
                    <Link
                      className=" mx-3"
                      to={`/edit/${items.id}`}
                    >
                      <FiEdit style={{fontSize:"20px",color:"white"}}/>
                    </Link>
                    <div
                      
                      onClick={() => deleteData(items.id)}
                      
                    >
                      <MdOutlineDeleteOutline style={{color:"red",fontSize:"20px",cursor:"pointer"}}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
