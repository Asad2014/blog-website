import Image from "next/image";

import React from 'react'

const Footer = () => {
  return (
    <footer className="  min-h-auto text-[14px]  border-black/40  text-white p-10 flex justify-between flex-col bg-black">
      
    <div className="flex justify-around flex-col md:flex-row space-y-8 md:space-y-0">
   

      <div>
        <h4 className=" text-white font-semibold text-[18px]">CONTACT US</h4>
        <p className="mt-2 text-white">asadkk2014@gmail.com</p>
        <p className=" text-white">+92 347 2454 751</p>
      </div>

      <div>
        <h4 className="text-white font-semibold text-[18px] pl-8">Links</h4>
        <ul className="mt-2 space-y-2 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="w-[200px] flex flex-col flex-wrap">
        <h4 className=" text-white font-semibold text-[18px]">Subscribe</h4>
        <p className="mt-2 text-white break-words">
          Get our weekly newsletter for latest blog news, exclusive blogs and
          deals, and more.
        </p>
        <div className="mt-4 flex gap-2">
          <input
            type="email"
            placeholder="Your Email..."
            className="px-2 w-[150px] outline-none h-[40px]  rounded-[50px] text-gray-900"
          />
          <button className=" bg-blue-500 hover:bg-blue-600  h-[40px] text-[14px]  border border-white px-2 rounded-md">
            subscribe
          </button>
        </div>
      </div>
    </div>

    <div className="flex w-[100%] justify-center items-center  mt-20 text-white">
      <div className=" w-[80%] border-gray-700 border-t  items-center">
          <p className="text-md whitespace-nowrap text-center ">
            Copyright © 2024. All rights reserved.
          </p>
        </div>
      </div>
  </footer>
    
  )
}

export default Footer


