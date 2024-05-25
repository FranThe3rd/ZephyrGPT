import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import './discover.css'
import axios from 'axios'
import loadingImg from '../../assets/loading.gif'

const Discover = () => {

  const [articles,setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const API_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=chatbots&language=en&sortBy=relevancy&apiKey=${API_KEY}`);
        setLoading(false);
        setArticles(res.data.articles.sort(() => Math.random() - .5).slice(0, 18));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    
  
  }, []);

  console.log('Environment Variables:', process.env.REACT_APP_API_KEY);
 


  return (
    <div className='discover'>
      <Navbar />
        <h1 className='discover-title'> Disover News On The AI Revolution</h1>

        <div className='articles'>
          {loading ? <img className='loadingImg' src={loadingImg}></img> : articles.map((article,index) => {
            return (
              <div className='article active' key={index}>
                <img src={article.urlToImage} alt={article.title} />
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <a href={article.url} target='_blank' rel='noreferrer'>Read More</a>
              </div>
            )
          })}
          </div>
      
    </div>
  )
}

export default Discover
