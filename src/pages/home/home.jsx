import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/navbar'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
import { InstagramLogo, TwitterLogo, DiscordLogo, FacebookLogo } from 'phosphor-react'

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
      <div className='home-icons'>
        <InstagramLogo size={30}  />
        <TwitterLogo size={30}  />
        <DiscordLogo size={30}  />
        <FacebookLogo size={30}  />
      </div>
      <div className='home-what'>
        <h1>What is ZephyrGPT?</h1>
        <h3>ZephyrGPT is an AI-powered chatbot that delivers unmatched intelligence and personalized responses, adapting seamlessly to your style. Enjoy secure, engaging conversations anytime with its user-friendly interface. Experience the future of AI interactions with ZephyrGPT.</h3>
        <div className='home-what-grid'>
          <div className='home-what-card'>
            <h4>Chatbots</h4>
            <p>ZephyrGPT's chatbot provides intelligent, context-aware conversations for personalized and efficient user interactions.</p>
          </div>
          <div className='home-what-card'>
            <h4>Knowledgebase</h4>
            <p>ZephyrGPT's knowledgebase is a powerful tool that provides instant answers to your questions, making it easier to find the information you need.</p>
          </div>
          <div className='home-what-card'>
            <h4>Education</h4>
            <p>ZephyrGPT's educational resources help you learn new skills and gain knowledge on a wide range of topics, from programming to marketing.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
