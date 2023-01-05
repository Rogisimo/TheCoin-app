import React from 'react'

function CoinCard({coin}) {
  return (
    <div className="coin-card">
        <div className="coin-card-info">
        <h1>{coin.symbol}</h1>
        <h3>{coin.name}</h3>
        <img src={coin.iconUrl} alt="" className='icon-img'/>
        <p className='coin-price'>${parseFloat(coin.price).toFixed(2)}</p>
        <p className='coin-rank'>#{coin.rank}</p>
        </div>
    </div>
  )
}

export default CoinCard