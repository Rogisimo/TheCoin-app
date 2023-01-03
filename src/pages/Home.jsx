import React from 'react'
import Landing from '../components/Landing'
import SearchCoin from '../components/SearchCoin'
import { useState } from 'react'
import Coins from '../components/Coins'

function Home() {
  const [coins, setCoins] = useState([])
  return (
    <section id="home">
      <Landing/>
      <SearchCoin setCoins={setCoins}/>
      <Coins setCoins={setCoins} coins={coins}/>
    </section>
  )
}

export default Home