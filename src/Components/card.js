import React from "react";

const card = (props) => {
  return (
    <div className="flex flex-col justify-center items-center text-white max-w-xs backdrop-blur-lg rounded-3xl p-10 w-335 h-546 left-563 top-401 bg-opacity-22 backdrop-blur-11.5 rounded-43">
        <h1 className=" text-2xl font-bold"> {props.title} </h1> <br/>
        <p className="text-xl underline font-semibold">{props.time}</p><br />
        <p className="text-lg">{props.benefits}</p>
        <p className="mt-6 font-semibold"> RS.{props.price}</p>
        <button className="mt-12 mb-6 bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"> Buy Now </button>
    </div>
  )
}

export default card