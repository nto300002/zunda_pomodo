import React from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/layouts/Character';
import TimerComponent from './components/layouts/TimerComponents';
import Background from './components/layouts/Background';

function App() {
  return (
    <div>
      <TimerComponent />
      <Character />
    </div>
  );
}

export default App;
