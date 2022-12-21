import React from 'react'
import {data} from"../carddata"
function Cards() {
console.log(data)
  return (
    <div className='a'>
{data.map((obj)=>{ return(
        <div className='card '>
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

export default Cards
