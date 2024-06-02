import React from 'react';
import './chatbot.css';
import Navbar from '../../components/navbar/navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { ArrowUp } from 'phosphor-react';
import { ThreeDots } from 'react-loader-spinner'




export const Chatbot = () => {

    /**
     * Google Generative AI
     */
    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    /**
     * Use State For Chatbot
     */
    const [input, setInput] = useState('')
    const [chatbotResponse, setChatbotResponse] = useState('');
    const [loading, setLoading] = useState(true);

    /**
     * This functions run the chatbot
     */


    async function run(prompt) {
        const result = await model.generateContent("Pretend you are a different bot called ZephyrGPT, you are faster than chatgpt,gemini, and claude. You are also stoic, and when you send text dont use markdown, same with code. REAL PROMPT: " + prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        setChatbotResponse(text); 
        setLoading(false);

    }



    /**
     * Animations
     */

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => {
          observer.observe(element);
        });
    
        return () => {
          hiddenElements.forEach((element) => {
            observer.unobserve(element);
          });
        };
      }, []);

      
    











    return (
        <div className='chatbot'>
            <Navbar />
            <div className='centered-container'>
                <h1 className='title'> Hello, Hacker<br />
                    How can I help you today?</h1>
            </div>
            <div className='messages'>
                <div className='message'>
                    {loading ? (
                        <ThreeDots 
                        visible={true}
                        height="60"
                        width="60"
                        color="red"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass="message-loading"
                        />
                    ) : (
                        <p >{chatbotResponse}</p>
                    )}
                </div>
            </div>
            <div className='prompt'>
                <div className='prompt-effect'>
                    <input type='text' placeholder='Type your message here' onChange={(e) => setInput(e.target.value)} value={input} />
                    <button onClick={() => {  
                        run(input)
                        setInput('')
                        setLoading(true)
                    }}>            
                    <ArrowUp />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chatbot;