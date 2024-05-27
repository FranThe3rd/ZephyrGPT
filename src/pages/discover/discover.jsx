import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import './discover.css'
import axios from 'axios'
import loadingImg from '../../assets/loading.png'
import Footer from '../../components/footer/footer'

const Discover = () => {
  const [loading, setLoading] = useState(true)

  /** 

  const [articles, setArticles] = useState([])
  const API_KEY = process.env.REACT_NEWS_API_KEY

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=chatbots&language=en&sortBy=relevancy&apiKey=${API_KEY}`);
        setLoading(false);
        setArticles(res.data.articles.slice(0, 18));
        console.log(res.data.articles.slice(0, 18));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();


  }, []);

*/

useEffect(() => {
  const delay = 500; // 0.5 second delay

  const timer = setTimeout(() => {
    // Your code to run after the delay
    console.log('Delayed action after 0.5 second');
    setLoading(false);

  }, delay);

  // Cleanup function to clear the timer in case component unmounts before the delay finishes
  return () => clearTimeout(timer);
}, []); // Empty dependency array means this effect runs only once after initial render


  const data = [
    {
      author: "Maxwell Zeff",
      content: "The mysterious AI chatbot, gpt2-chatbot, returned to the major large language model benchmarking site, LMSYS Org, on Monday night roughly a week after it abruptly disappeared. But now, there are two:… [+2932 chars]",
      description: "The mysterious AI chatbot, \"gpt2-chatbot,\" returned to the major large language model benchmarking site, LMSYS Org, on Monday night roughly a week after it abruptly disappeared. But now, there are two: \"im-a-good-gpt2-chatbot\" and \"im-also-a-good-gpt2-chatbot…",
      publishedAt: "2024-05-07T14:15:00Z",
      source: {id: null, name: "Gizmodo.com"},
      title: "Powerful New Chatbot Mysteriously Returns in the Middle of the Night",
      url: "https://gizmodo.com/powerful-new-gpt2-chatbot-mysteriously-returns-1851460717",
      urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9d2b30827970bafd6849a14af20fd426.jpg"
    },
    {
      author: "Lisa Lacy",
      content: "When you ask an AI chatbot like ChatGPT, Claude, Copilot or Gemini to do something, it may seem like you're interacting with a person.\r\nBut you're not. These chatbots don't actually understand the me… [+9760 chars]",
      description: "Chatbots may sound human, but they don't think the way we do.",
      publishedAt: "2024-04-24T23:00:07Z",
      source: {id: null, name: "CNET"},
      title: "AI Chatbots Need Large Language Models. Here's What to Know About LLMs - CNET",
      url: "https://www.cnet.com/tech/ai-chatbots-need-large-language-models-heres-what-to-know-about-llms/",
      urlToImage: "https://www.cnet.com/a/img/resize/d0039abbc16964293a18370556ab11d54f4b4fb0/hub/2024/03/07/a6e02bcf-0aec-4883-a45e-97fb586180ef/large-language-model.jpg?auto=webp&fit=crop&height=675&width=1200"
    },
    {
      author: "Maxwell Zeff",
      content: "OpenAI unveiled GPT-4 Omni (GPT-4o) during its Spring Update on Monday morning in San Francisco. Chief Technology Officer Mira Murati and OpenAI staff showcased their newest flagship model, capable o… [+3614 chars]",
      description: "OpenAI unveiled GPT-4 Omni (GPT-4o) during its Spring Update on Monday morning in San Francisco. Chief Technology Officer Mira Murati and OpenAI staff showcased their newest flagship model, capable of real-time verbal conversations with a friendly AI chatbot …",
      publishedAt: "2024-05-13T18:24:00Z",
      source: {id: null, name: "Gizmodo.com"},
      title: "OpenAI Unveils GPT-4 Omni's Voice Capabilities and They're Literally Unbelievable",
      url: "https://gizmodo.com/openai-unveils-gpt-4-omni-s-voice-capabilities-and-they-1851473470",
      urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/70a71beaa319ddc27762cafda40deea6.png"
    },
    {
      author: "Benj Edwards",
      content: "19\r\nOn Thursday, renowned AI researcher Andrej Karpathy, formerly of OpenAI and Tesla, tweeted a lighthearted proposal that large language models (LLMs) like the one that runs ChatGPT could one day b… [+3357 chars]",
      description: "Andrej Karpathy muses about sending a LLM binary that could \"wake up\" and answer questions.",
      publishedAt: "2024-05-03T19:04:13Z",
      source: {id: "ars-technica", name: "Ars Technica"},
      title: "AI in space: Karpathy suggests AI chatbots as interstellar messengers to alien civilizations",
      url: "https://arstechnica.com/information-technology/2024/05/ai-in-space-karpathy-suggests-ai-chatbots-as-interstellar-messengers-to-alien-civilizations/",
      urlToImage: "https://cdn.arstechnica.net/wp-content/uploads/2024/05/astronaut_laptop-760x380.jpg"
    },
    {
      author: "Suswati Basu",
      content: "More and more people are interacting with artificial intelligence to a degree we have never seen before. Some of these technologies respond in the form of AI chatbots, with one in particular taking t… [+8163 chars]",
      description: "More and more people are interacting with artificial intelligence to a degree we have never seen before. Some of these… Continue reading What is Character.AI? How to create your own chatbots and use the old version\nThe post What is Character.AI? How to create…",
      publishedAt: "2024-05-16T14:53:22Z",
      source: {id: null, name: "ReadWrite"},
      title: "What is Character.AI? How to create your own chatbots and use the old version",
      url: "https://readwrite.com/what-is-character-ai-how-to-create-your-own-chatbots-use-old-version/",
      urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/What-is-Character.AI-How-to-create-your-own-chatbots-and-use-the-old-version.png"
    },
    {
      author: "Hugh Langley",
      content: "Google CEO Sundar Pichai.Greg Sandoval/Business Insider\r\n<ul><li>At Google IO conference, CEO Sundar Pichai teased where AI is headed next.</li><li>It's going to be all about agents that are better a… [+5414 chars]",
      description: "Google is trying to turn AI chatbots to intelligent systems that can reason, plan, and remember. Project Astra is a window into this potential future.",
      publishedAt: "2024-05-14T17:51:04Z",
      source: {id: "business-insider", name: "Business Insider"},
      title: "Google just gave us a tantalizing glimpse into the future of AI agents",
      url: "https://www.businessinsider.com/google-future-ai-agents-project-astra-2024-5",
      urlToImage: "https://i.insider.com/6642a1f99686a6f37bff8b3a?width=1200&format=jpeg"
    },
    {
      author: "Makena Kelly",
      content: "This is all great, but voters are probably going to encounter more digital fakes online than over broadcast. And for digital ads, the government hasnt issued any solutions.\r\nThe Federal Election Comm… [+3757 chars]",
      description: "Without new rules, campaigns could hoodwink voters with AI-generated ads. And no one really seems to be taking the threat seriously.",
      publishedAt: "2024-05-23T11:30:00Z",
      source: {id: "wired", name: "Wired"},
      title: "Inside the Reluctant Fight to Ban Deepfake Ads",
      url: "https://www.wired.com/story/inside-the-reluctant-fight-to-ban-deepfake-ads/",
      urlToImage: "https://media.wired.com/photos/664e5a5755dbe1fffdd7b1ea/191:100/w_1280,c_limit/politics_lab_campaign_ads_ai_disclosure.jpg"
    },
    {
      author: "Will Knight",
      content: "When ChatGPT was released in November 2023, it could only be accessed through the cloud because the model behind it was downright enormous.\r\nToday I am running a similarly capable AI program on a Mac… [+2456 chars]",
      description: "Research at Microsoft shows it's possible to make AI models small enough to run on phones or laptops without major compromises to their smarts. The technique could open up new use cases for AI.",
      publishedAt: "2024-05-23T16:00:00Z",
      source: {id: "wired", name: "Wired"},
      title: "Pocket-Sized AI Models Could Unlock a New Era of Computing",
      url: "https://www.wired.com/story/pocket-sized-ai-models-unlock-new-era-of-computing/",
      urlToImage: "https://media.wired.com/photos/664e75af62bc1a1607ba10c1/191:100/w_1280,c_limit/Shrinking-AI-Models-Fast-Forward-Business-1494930055.jpg"
    },
    {
      author: "Juras Jursenas",
      content: "Most of us are familiar with chatbots on customer service portals, government departments, and through services like Google Bard and OpenAIs ChatGPT. They are convenient, easy to use, and always avai… [+7236 chars]",
      description: "Most of us are familiar with chatbots on customer service portals, government departments, and through services like Google Bard and OpenAI's ChatGPT. They are convenient, easy to use, and always available, leading to their growing use for a diverse range of …",
      publishedAt: "2024-05-09T07:00:40Z",
      source: {id: "the-next-web", name: "The Next Web"},
      title: "The key technologies fuelling chatbot evolution",
      url: "https://thenextweb.com/news/key-technologies-chatbot-evolution",
      urlToImage: "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F05%2Fchatbotsfuture-e1715180675203.jpg&signature=fa78bea513794effaa475b20768974d9"
    },
    {
      author: "Maxwell Zeff",
      content: "Apple is reportedly holding discussions with OpenAI about using the startups AI technology to power some features coming to the iPhone later this year, Bloomberg reported on Friday. This comes roughl… [+1931 chars]",
      description: "Apple is reportedly holding discussions with OpenAI about using the startup's AI technology to power some features coming to the iPhone later this year, Bloomberg reported on Friday. This comes roughly a month after reports surfaced that Apple was holding dis…",
      publishedAt: "2024-04-27T11:00:00Z",
      source: {id: null, name: "Gizmodo.com"},
      title: "ChatGPT Could Power the iPhone's AI Chatbot: Report",
      url: "https://gizmodo.com/chatgpt-openai-could-power-apple-iphones-ai-chatbot-1851439853",
      urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a2f3eac7c6a08e2d3d0169f05a4bb371.jpg"
    },
    {
      author: "James Jones",
      content: "The emergence and rapid growth of artificial intelligence, AI chatbots and assistants has taken the world by storm in recent years, so much so that were now seeing both technologies collide and merge… [+5159 chars]",
      description: "The emergence and rapid growth of artificial intelligence, AI chatbots and assistants has taken the world by storm in recent… Continue reading Rabbit R1 explained: what is it, specs, price and release date\nThe post Rabbit R1 explained: what is it, specs, pric…",
      publishedAt: "2024-05-01T16:33:13Z",
      source: {id: null, name: "ReadWrite"},
      title: "Rabbit R1 explained: what is it, specs, price and release date",
      url: "https://readwrite.com/rabbit-r1-release-date/",
      urlToImage: "https://readwrite.com/wp-content/uploads/2024/03/Rabbit-R1.png"
    },
    {
      author: "Chris Stokel-Walker",
      content: "Researchers are misusing ChatGPT and other artificial intelligence chatbots to produce scientific literature. At least, that's a new fear that some scientists have raised, citing a stark rise in susp… [+7279 chars]",
      description: "One percent of scientific articles published in 2023 showed signs of generative AI's potential involvement, according to a recent analysis",
      publishedAt: "2024-05-01T10:45:00Z",
      source: {id: null, name: "Scientific American"},
      title: "Chatbots Have Thoroughly Infiltrated Scientific Publishing",
      url: "https://www.scientificamerican.com/article/chatbots-have-thoroughly-infiltrated-scientific-publishing/",
      urlToImage: "https://static.scientificamerican.com/dam/m/2161eea18fe7dd06/original/AIsciencePubs_graphic_leadImage.png?w=1200"
    },
    
  ]



return (
  <div className='discover'>
    <Navbar />
    <h1 className='discover-title'> Discover News On The AI Revolution</h1>

    <div className='articles'>
      {loading ? <img className='loadingImg' src={loadingImg}></img> : data.map((article, index) => {
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
