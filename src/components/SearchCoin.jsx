import React from 'react'
import { useState } from 'react'
import {fetchData, coinsOptions} from "../utils/fetchData"

function SearchCoin({setCoins}) {
    const [search, setSearch] = useState("")
    

    const handleSearch = async () => {
        if(search){
            const coinsData = await fetchData('https://coinranking1.p.rapidapi.com/coins',
            coinsOptions);

           
            const searchedCoins = coinsData.data.coins.filter(
                (coin) => coin.symbol.toLowerCase().includes(search)
                ||coin.name.toLowerCase().includes(search)
              );
      

            setSearch('')
            setCoins(searchedCoins)
        }
    }
    


  return (
    <section id='search-coin'>
        <div className="search-heading">
            Search your favourite coin
        </div>
        <div className="search">
        <input className='search-input' type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <button onClick={handleSearch} className='explore-btn search-btn'>Search</button>
        </div>
    </section>
  )
}

export default SearchCoin