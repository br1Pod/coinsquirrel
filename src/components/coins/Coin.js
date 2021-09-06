import React from 'react'


const Coin = ({name, ticker, image, price, change}) => {





    return (
        <div className='coin-card'>
            <img src={image} alt={`${name}`} className="logo" />
            <p className="ticker">{ticker.toUpperCase()}</p>
            <p className="coin-name">{name}</p>
            <p className="price">${price}</p>
            <p className="change">24hr Change {change}</p>
        </div>
    )
}

export default Coin
