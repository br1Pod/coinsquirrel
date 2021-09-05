import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../components/style.css';
import WatchList from './WatchList';

const DisplayPage = () => {
    
    const [coins, setCoins]= useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d')
        .then((response) => {
            setCoins(response.data)
            console.log(response.data)
        })
        .catch(error => console.error)
    }, [])

    return (
        <div>
            <h1 id="branding">Coin<span>Squirrel</span></h1>
            <WatchList />
        </div>
    )
}

export default DisplayPage
