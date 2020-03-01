import React from 'react';
import data from './Data/CommentData.json'
import './App.css';
import CommentBox from './Components/CommentBox'

function App() {
  return (
    <CommentBox commentData= {data}/>
  );
}

export default App;
