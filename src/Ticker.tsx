
import { useState } from "react"
import logo1 from "./assets/Ticker/2x/all4s_2x_ticker_1.png"
import logo2 from "./assets/Ticker/2x/all4s_2x_ticker_2.png"
import logo3 from "./assets/Ticker/2x/all4s_2x_ticker_3.png"
import logo4 from "./assets/Ticker/2x/all4s_2x_ticker_4.png"
import logo5 from "./assets/Ticker/2x/all4s_2x_ticker_5.png"
import logo6 from "./assets/Ticker/2x/all4s_2x_ticker_6.png"
import logo7 from "./assets/Ticker/2x/all4s_2x_ticker_7.png"
import logo8 from "./assets/Ticker/2x/all4s_2x_ticker_8.png"
import logo9 from "./assets/Ticker/2x/all4s_2x_ticker_9.png"

import logo4x1 from "./assets/Ticker/4x/all4s_4x_ticker_1.png"
import logo4x2 from "./assets/Ticker/4x/all4s_4x_ticker_2.png"
import logo4x3 from "./assets/Ticker/4x/all4s_4x_ticker_3.png"
import logo4x4 from "./assets/Ticker/4x/all4s_4x_ticker_4.png"
import logo4x5 from "./assets/Ticker/4x/all4s_4x_ticker_5.png"
import logo4x6 from "./assets/Ticker/4x/all4s_4x_ticker_6.png"
import logo4x7 from "./assets/Ticker/4x/all4s_4x_ticker_7.png"
import logo4x8 from "./assets/Ticker/4x/all4s_4x_ticker_8.png"
import logo4x9 from "./assets/Ticker/4x/all4s_4x_ticker_9.png"

import "./Ticker.css"
export default function Ticker() {
    const [tickerNum, setTickerNum] = useState(0)
    const [is4x2x, setIs4x2x] = useState(true)
    const logos2x = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]
    const logos4x = [logo4x1, logo4x2, logo4x3, logo4x4, logo4x5, logo4x6, logo4x7, logo4x8, logo4x9]
    return (
        <div className="ticker">
            <img src={is4x2x ? logos2x[tickerNum] : logos4x[tickerNum]}></img>
            <button type="button" disabled={tickerNum<=0} className="buttonLarge red" onClick={() => {setTickerNum(tickerNum-1)}}>-</button>
            <button type="button" disabled={tickerNum>=8} className="buttonLarge green" onClick={() => {setTickerNum(tickerNum+1)}}>+</button>
            <button type="button" className="buttonLarge purple" onClick={() => {setIs4x2x(!is4x2x)}}>Toggle</button>
        </div>
    )
}