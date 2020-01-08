import React, { useState, useEffect, useCallback } from 'react';
import api from './services/api';
import { mountTweetUrl, colors } from './services/utils';

function App() {
  const [quote, setQuote] = useState({
    text: '',
    author: '',
  });

  const [color, setColor] = useState('#000');

  const fetchData = useCallback(async () => {
    const response = await api.get('/random');
    const data = response.data;
    if (data.content.length > 280) {
      fetchData();
    } else {
      setQuote({ text: data.content, author: data.author });
      changeColor();
    }
  }, []);

  const changeColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    setColor(colors[index]);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = e => {
    fetchData();
  };

  return (
    <div className='App' id='quote-box' style={{ backgroundColor: color }}>
      <h1 id='text'>{quote.text}</h1>
      <h3 id='author'>{quote.author}</h3>
      <button id='new-quote' type='submit' onClick={handleClick}>
        New quote
      </button>
      <a href={mountTweetUrl(quote)} id='tweet-quote'>
        Tweet
      </a>
    </div>
  );
}

export default App;
