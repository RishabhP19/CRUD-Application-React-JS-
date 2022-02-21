import React from "react";
import "./MiniDiv.css";

import cloud from "./Image/cloud.png";
import { BsFolder2Open } from "react-icons/bs";
import { RiFolderSharedLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import { BiLogIn,BiLogInCircle } from "react-icons/bi";

const MiniDiv = (props) => {
  return (
    <div className="MiniDiv">
      <div className="mini_div_wrap">
        <div className="sidebar_open">
      <BiLogInCircle onClick={()=>props.setSidebar2(!props.sidebar2)} />
      </div>
      <div className="sidebar_row1">
        <img src={cloud} alt="drive" className="icon_img1" />
      </div>

      <div className="sidebar_row1">
        <RiFolderSharedLine className="icon_img1" />
      </div>

      <div className="sidebar_row1">
        <BsFolder2Open className="icon_img1" />
      </div>
      <div className="sidebar_row1">
        <AiOutlineStar className="icon_img1" />
      </div>
      <div className="sidebar_row1">
        <IoTrashOutline className="icon_img1" />
      </div>
      <div className="sidebar_row1">
        <BiLogIn className="icon_img1" />
      </div>
      </div>
    </div>
  );
};

export default MiniDiv;
