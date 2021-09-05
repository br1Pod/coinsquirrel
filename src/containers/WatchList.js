import React, {useState, useEffect} from 'react'
import CoinInfo from '../components/coins/CoinInfo'

const WatchList = () => {
    return (
        <div>
            <ul id = "watch-list">
            <p>watch list here</p>
                <CoinInfo />
            </ul>
        </div>
    )
}

export default WatchList
