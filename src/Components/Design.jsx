import React from 'react'
import { subsCards } from "../data";
import Card from "./card" ;

const Design = (props) => {
  return (
    <div>
      <div className='flex flex-col' >
        {/* {props.title} */}
        <p className='flex items-center text-center font-bold p-9 justify-center text-white text-4xl h-full'>
        INTRODUCING OUR SPECIAL <br></br> SUBSCRIPTION PLANS </p>
        <div className='text-sky-400 flex w-full justify-evenly gap-10 mb-20'>
          {
            subsCards.map( (data) => {
              return (
                <Card title={data.title} time={data.time} benefits={data.benefits} price={data.price} />
              )
            } )
          }
        </div>
        
      </div>

    </div>
  )
}

export default Design