import React, { useState } from "react";
import "./SideBar.css";
import Image from "./Image/Logo.png";
import cloud from "./Image/cloud.png";
import { BsFolder2Open } from 'react-icons/bs';
import { RiFolderSharedLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import { BiLogIn,BiLogOutCircle } from 'react-icons/bi';
import "./SideBarRow.css"


const SideBar = (props) => {
  


  return (
    <div className="Sidebar">
      <div className="sidebar_logo">
        <img src={Image} alt="Rock Type" className="icon_logo" />
        
        <h2 className="title">Drive.</h2>
        <div  style={{fontSize:"30px",marginTop:"-20px",cursor:"pointer"}}>
        <BiLogOutCircle onClick={()=>props.setSidebar1(false)}  />
        </div>
        
      </div>
      <div className="sidebar_Row_Wrap">
        <div className="sidebar_row">
          <img src={cloud} alt="drive" className="icon_img" />
          <h2 className="sidebarRow_title">My Drive</h2>
        </div>

        <div className="sidebar_row">
          <RiFolderSharedLine className="icon_img" />
          <h2 className="sidebarRow_title">Shared Files</h2>
        </div>

        <div className="sidebar_row">
        <BsFolder2Open className="icon_img" />
          <h2 className="sidebarRow_title">File Requored</h2>
        </div>
        <div className="sidebar_row">
        <AiOutlineStar className="icon_img" />
          <h2 className="sidebarRow_title">Starred</h2>
        </div>
        <div className="sidebar_row">
        <IoTrashOutline className="icon_img" />
          <h2 className="sidebarRow_title">Trash</h2>
        </div>
        <div className="sidebar_row">
        <BiLogIn className="icon_img" />
          <h2 className="sidebarRow_title">Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
