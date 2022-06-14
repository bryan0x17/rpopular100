import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    
  },
});

export const getData = async (after) => {
  const options = {
    method: 'GET',
    body: JSON.stringify(after)
  };
  const url = 'https://www.reddit.com/r/popular.json';
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
