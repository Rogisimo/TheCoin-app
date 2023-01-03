export const coinsOptions = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
      'X-RapidAPI-Key': "2c325150bemshc51573c1c0bcd30p1dfd8bjsncbd47c8692f5",
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) => {
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}
