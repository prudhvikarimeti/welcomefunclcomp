import React from 'react'
import { useState } from 'react'
import './App.css'


function App() {
  const[isSubscribed,setState]=useState(false);

  const subscribed=()=>{
    setState(true)
  }

  const subscribe=()=>{
    setState(false)
  }
 
  return (
    <div className='main-container'>
    <h1 className='heading'>Welcome</h1>
      <p className='para'>Thank you! Happy Learning</p>
      {isSubscribed?(<button className='button' type="button"
      onClick={subscribe}>
      Subscribed
      </button>):(<button className='button' type="button"
      onClick={subscribed}>
      Subscribe
      </button>)}
    </div>
  )
}

export default App
