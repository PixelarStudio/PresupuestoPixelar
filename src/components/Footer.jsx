import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row gap-10 text-2xl align-middle items-center place-content-center p-4 rounded-lg bg-gray-700 text-white py-3 mt-10">
    <div className="flex gap-3 items-center ">
      <FaWhatsapp className="FaWhatsapp" size={25} />
      <p className="text-xl">+54 11 24025510</p>
    </div>
    <div className="flex gap-3 items-center">
      <MdAlternateEmail className="MdAlternateEmail" size={25} />
      <p className="text-xl">INFO@PIXELARSTUDIO.COM</p>
    </div>
    <div className="flex gap-3 items-center">
      <TbWorldWww className="TbWorldWww" size={25} />
      <p className="text-xl">WWW.PIXELARSTUDIO.COM</p>
    </div>
  </div>
  )
}

export default Footer
