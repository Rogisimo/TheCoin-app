import React from 'react'

function CoinCard({coin}) {
  return (
    <div className="coin-card">
        <h1>{coin.symbol}</h1>
        <img src={coin.iconUrl} alt="" className='icon-img'/>
        <h3>{coin.name}</h3>
    </div>
  )
}

export default CoinCard