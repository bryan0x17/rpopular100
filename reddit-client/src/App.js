import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './features/navbar/NavBar';
import { Post } from './features/post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts, selectPosts } from './features/post/postSlice';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch]);
  const posts = useSelector(selectPosts);

  return (
    <div className="App">
      <NavBar />
      {posts.map((post, index) => {
        return <Post
          post={post}
          key={index}
        />
      })}
    </div>
  );
}

export default App;
