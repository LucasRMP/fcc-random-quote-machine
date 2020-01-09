import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from './services/api';
import { mountTweetUrl, colors } from './services/utils';

import { AnimateOnChange } from 'react-animation';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  const [quote, setQuote] = useState({
    text: '',
    author: '',
  });
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#000');

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await api.get('/random');
    const data = response.data;
    if (data.content.length <= 200) {
      setQuote({ text: data.content, author: data.author });
      changeColor();
    } else {
      fetchData();
    }
    setLoading(false);
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
    <div className='App' style={{ backgroundColor: color }}>
      <AnimateOnChange>
        {!loading && (
          <div id='quote-box'>
            <div id="text-wrapper">
              <FontAwesomeIcon
                id="quote-icon"
                icon={faQuoteRight}
                color={color}
                flip='horizontal'
                size='2x'
                />
              <h1 id='text' style={{ color }}>
                {quote.text}
              </h1>
            </div>
            <h3 id='author' style={{ color }}>
              &#8212;{" "}{quote.author}
            </h3>
            <div id="footer">
              <button
                id='new-quote'
                type='submit'
                onClick={handleClick}
                style={{ backgroundColor: color }}
              >
                New quote
              </button>
              <a href={mountTweetUrl(quote)} id='tweet-quote' target='blank'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  color={color}
                  flip='horizontal'
                  size='2x'
                />
              </a>
            </div>
          </div>
        )}
      </AnimateOnChange>
    </div>
  );
}

export default App;
