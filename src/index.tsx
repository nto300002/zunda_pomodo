import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Background from './components/layouts/Background';
import { Swiper, SwiperSlide } from 'swiper/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <title>ずんだもんとポモドーロ！</title>
      <div className="App flex flex-col min-h-screen bg-gray-50 relative bg-green-200 text-gray-600">
        <header className="bg-green w-hull p-4 text-3xl">
          ずんだもんとポモドーロ！
        </header>
        <menu className="flex-1 container max-w-screen-md mx-auto px-5 py-5 bg-white">
          <App />
        </menu>
        <Swiper />
        <footer className="py-5">
          <div className="text-center text-sm">
            Copyright © All rights reserved | pomodoro_voicevox
          </div>
        </footer>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
