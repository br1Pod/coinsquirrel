import React from 'react'


const Coin = ({name, ticker, image, price, change}) => {





    return (
        <div className='coin-card'>
            <img src={image} alt={`${name}`} className="logo" />
            <p className="ticker">{ticker.toUpperCase()}</p>
            <p className="coin-name">{name}</p>
            <p className="price">${price}</p>
            {change < 0 ? (
                <p className="change">24hr <span className = "negative"> {change.toFixed(2)} %</span></p>
            ) : (
                <p className="change">24hr <span className = "positive"> {change.toFixed(2)} %</span></p>
            )}


            
        </div>
    )
}

export default Coin
