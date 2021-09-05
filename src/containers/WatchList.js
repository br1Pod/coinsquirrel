import React, {useState, useEffect} from 'react'
import CoinInfo from '../components/CoinInfo'

const WatchList = () => {
    return (
        <div>
            <ul id = "watch-list">
                <CoinInfo />
            </ul>
        </div>
    )
}

export default WatchList
