import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../components/style.css';
import Coin from '../components/coins/Coin';


const DisplayPage = () => {
    
    const [coins, setCoins]= useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d')
        .then((response) => {
            setCoins(response.data)
            console.log(response.data)
        })
        .catch(error => console.error(error))
    }, []);

    const changeHandler = (event) => {
        setSearch(event.target.value);
    }

    const filterCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))



    return (
        <div>
            <div id ="header">
                <h1 id="branding"><i class="fas fa-search-dollar"></i> <span>Coin</span>Watcher</h1>
                <form>
                <input className="searchbox" type="text" onChange={changeHandler} placeholder="Search Coins" />
                </form>
            </div> 
            <div id = "watch-list">
                {filterCoins.map((coin) => {
                    return (
                       <Coin 
                            key={coin.id}
                            name={coin.name}
                            ticker={coin.symbol}
                            image={coin.image}
                            price={coin.current_price}
                            change={coin.price_change_percentage_24h}
                        /> 
                    );
                }
                )};
            </div>
        </div>
    );
}

export default DisplayPage;
