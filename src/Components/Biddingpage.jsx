import React from 'react'
import { useLocation } from 'react-router-dom'

const Biddingpage = () => {
    const location = useLocation();
  return (
    <div>
        <p style={{fontSize:"2.5rem",textAlign:"center"}}> Bid for {location.state.name} </p>
         </div>
  )
}

export default Biddingpage