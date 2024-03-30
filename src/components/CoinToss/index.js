// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            className="image"
          />
          <button className="toss-coin-button" type="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para">Total</p>
            <p className="para">Heads</p>
            <p className="para">Tails</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
