import React from 'react';
import './chatbot.css';
import Navbar from '../../components/navbar/navbar';

export const Chatbot = () => {
    return (
        <div className='chatbot'>
            <Navbar />
            <div className='centered-container'>
                <h1 className='title'> Hello, Hacker<br />
                    How can I help you today?</h1>
            </div>
        </div>
    )
}

export default Chatbot;