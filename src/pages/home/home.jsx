import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/navbar'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='home-grid'>
        <div className='home-header-text'> <h1>Let's Build Something</h1>
          <h1>amazing with ZephyrGPT</h1>
          <h3>ZephyrGPT delivers unmatched intelligence and personalized responses, adapting seamlessly to your style. Enjoy secure, engaging conversations anytime with its user-friendly interface. Experience the future of AI interactions with ZephyrGPT.</h3>
          <input type="text" name="" id="" placeholder='Your Email Address' />
          <button>Get Started</button>
          <div className='home-people-div'>          
            <img className='home-people' src={people} alt="" />
            <p>1,600 people requested access in the last 24hr</p>
          </div>
        </div>
        <div className='home-header-img'>
          <img src={ai} alt="" />
        </div>


      </div>

    </div>
  )
}

export default Home
