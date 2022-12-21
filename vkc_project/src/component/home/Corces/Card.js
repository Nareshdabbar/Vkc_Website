import React from 'react'
import {data} from"./carddata"
import "./card.css"
function Card() {
// console.log(data)
  return (
    <div className='a'>
{data.map((obj)=>{ return(
        <div className='card ' key={obj.id}>
          <div className='card-taitil'>
            <img src={obj.avathar}></img>
            </div>
            <div className='card-taitil1'>
              <h4>{obj.taitil}</h4>
              <p>{obj.para}</p>
            </div>

        </div>
      )})}
    </div>
    
  )
}

export default Card
