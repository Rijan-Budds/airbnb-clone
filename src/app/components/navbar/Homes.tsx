import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoBalloon } from "react-icons/io5";
import { FaConciergeBell } from "react-icons/fa";

function Homes() {
return (
    <div className="flex flex-row items-center gap-6">
      <div className="text-sm font-semibold cursor-pointer hover:text-rose-500">
        <FaHome /> Homes
      </div>
      <div className="text-sm font-semibold cursor-pointer hover:text-rose-500">
        <IoBalloon />Experiences
      </div>
      <div className="text-sm font-semibold cursor-pointer hover:text-rose-500">
        <FaConciergeBell /> Online Experiences
      </div>
    </div>
  );
}

export default Homes
