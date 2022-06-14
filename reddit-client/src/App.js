import React from 'react';
import './App.css';
import { NavBar } from './features/navbar/NavBar';
import { Post } from './features/post/Post';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Post/>
    </div>
  );
}

export default App;
