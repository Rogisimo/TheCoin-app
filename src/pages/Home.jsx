import React from 'react'
import Coin from "../assets/eth-coin.png"

function Home() {
  function test(){
    console.log("A")
  }
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-coin">
          <img src={Coin} alt="" className='blue-coin'/>
        </div>
        <div className="home-heading">
          <h4>Cryptocurrency</h4>
          <h4>investments<span className='blue'>.</span></h4>
          <h5 className='blue'>Blockchain solutions</h5>
          <button onClick={test} className="details-btn">
            Details
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home