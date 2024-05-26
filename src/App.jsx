import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [quoteStore, setQuoteStore] = useState ("");
  const [randomQuote, setRandomQuote] = useState ("");
  const [randomColor, setRandomColor] = useState ("");
  

  useEffect(
    () =>{
      fetchData()
      getRandomColor()
      
    }, []
  )
  
  let fetchData = async ()=>{
    const enteredNameOrID = "https://api.quotable.io/quotes?limit=150"
    
    
   try {
       const res = await fetch(enteredNameOrID);
        const data = await res.json();
        
        let y= await data.results
        setQuoteStore(y)
        loo(y)
        
        

        
      } catch (err) {
        
        alert(' Check your network issue')
        
        
      }
      }
      
      
      function loo(xc){
      setRandomQuote(xc[Math.floor(Math.random() * xc.length)])

        

      }
  
let getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  setRandomColor(`rgb(${red}, ${green}, ${blue})`);
};

const transition = "background-color 3s";

if (randomQuote) {
  return (
    
    
      <div id="quote-box" style={{backgroundColor: randomColor, transition: transition }}>
        <div id="text">{randomQuote.content}</div>
        <div id="author">{randomQuote.author}</div>
        

        <a href='https:www.//twitter.com/intent/tweet'  id="tweet-quote">tweet-quote</a>
        <button id="new-quote" onClick={()=> {loo(quoteStore); getRandomColor()}}>new-quote</button>
      </div>
      
       
    
  )
} 
}


export default App

