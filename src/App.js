import React from 'react';
import './App.css';
import TopAppBar from './components/TopAppBar';
import Media from './components/Media';

function App() {
  return (
    <main className="Content">
      <TopAppBar />
      <Media />
    </main>
  );
}

export default App;