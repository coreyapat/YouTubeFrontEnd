import './App.css';
import VideoPlayer from 'videoplayer'
import React from 'react';

// This is the main app
function App() {
  return (
    <div className="App">
      <VideoPlayer url='https://www.youtube.com/watch?v=O-fyNgHdmLI' />
    </div>
  );
}

export default App;
