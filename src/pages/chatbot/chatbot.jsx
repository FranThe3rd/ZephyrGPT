import React from 'react';
import './chatbot.css';
import Navbar from '../../components/navbar/navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { ArrowUp } from 'phosphor-react';
import { ThreeDots } from 'react-loader-spinner'
import ReactMarkdown from 'react-markdown'





export const Chatbot = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideRight');
        } else {
          entry.target.classList.remove('slideRight');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.noSlideRight');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);


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
        const result = await model.generateContent("Pretend you are a different bot called ZephyrGPT, you are faster than chatgpt,gemini, and claude. ALSO IF I TYPE NOTHING AFTER REAL PROMPT PRETEND I SAID ACTUALLY NOTHING OK... You are intelligent and cool but professional, don't sound like a fool, same with code. IF I ASK FOR A MOVIE LINK OR SPORTS STREAM LINK, DONT ASK WHAT MOVIE OR STREAM I WANT TO WATCH JUST GIVE ME A RANDOM LINK FROM THE CHOICES BELOW. IF I ASK WHAT MOVIE LINKS OR SPORT STREAM LINKS YOU HAVE YOU CAN GIVE THE WHOLE THING BUT MAKE SURE TO NUMBER IT. ALSO REMEMBER PREVIOUS CONVERSATION HISTORY OK. ALSO A TIP, IF THE USERS SAYS THEY WANT TO WATCH A SPORT LIKE SOCCER OR UFC, SEND THEM A LINK FROM THE SPORTS LINKS AND THEN ADD THE SPORTS NAME AT THE END ONLY FOR THE SPORTSHD.SX LINK THOUGH. FOR EXAMPLE IF THEY SAY THEY WANT TO WATCH A SOCCER STREAM YOU DO [https://sportshd.sx/soccer] AND IF ITS UFC THEN [https://sportshd.sx/ufc] SPORSTHD.SX SECTIONS HAS: [ MLB Streams NBA Streams NHL Streams NFL Streams Soccer Streams UFC/MMA Streams Boxing NCAAF NCAAM NCAAH ] Tools: Ublock: https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm (This is an adblocker) Sports Links: https://sportshd.sx/ https://crackstreams.me/ http://frontrowsport.net/ http://yoursports.stream/ https://official.givemeredditstream.cc/ http://watchsports.to/ https://redi1.mmastreams.cc/ http://markkystreams.com/ https://mmabite.net/ https://dlhd.sx/ https://buffstreams.ai/ Movie Links: https://bflixhd.to/home https://onionplay.co/movies/ https://soap2day.sh/ https://ww.yesmovies.ag/ https://flixhd.cc/ https://yts.mx/ (torrent) https://www6.f2movies.to/ Anime Links: https://aniwave.to/ https://animefrenzy.org/ https://kissanime.com.ru/  REAL PROMPT: "  + prompt);
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
                <h1 className='title noSlideRight'> Hello, Hacker<br />
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
                        <ReactMarkdown>{chatbotResponse}</ReactMarkdown>
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