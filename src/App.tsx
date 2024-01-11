import { useState } from 'react'
import quotes from './assets/quotes.json'
import './App.css'

const getNewQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quoteText, setNewQuote] = useState(getNewQuote());

  const changeQuote = () => {
    setNewQuote(getNewQuote());
  }

  return (
    <div className="page">
      <main id="quote-box" className="container-fluid">
        <div id="quote-text">
          <i className="fa fa-quote-left"></i>
          <div id="text" className="text-center">{quoteText.text}</div>
          <i className="fa fa-quote-right text-end"></i>
        </div>
          <div id="author">- {quoteText.author}</div>
        
        <div className="buttons">
        <button id="new-quote" onClick={changeQuote}>Get new Quote</button>
        <button><a href="https://twitter.com/intent/tweet/?text={quoteText.text}" id="tweet-quote"><i className="fa fa-share"></i> Share Quote</a></button>
        </div>
      </main>
    </div>
  )
}

export default App
