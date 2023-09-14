import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import Fivemin from './Fivemin';

const TimerComponent = ({ expiryTimestamp }: any) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  const startVoice = new Audio('/start.wav');
  
  const handleStopTimer = () => {
   if ('speechSynthesis' in window) {
    // 発言を設定
    const uttr = new SpeechSynthesisUtterance()
    uttr.text = "休憩するのだ、!"
    uttr.pitch = 1.4 
    // 発言を再生
    window.speechSynthesis.speak(uttr)
  } else {
    console.log('大変申し訳ありません。このブラウザは音声合成に対応していません。')
  }
  };

  const handleFiveminTimer = () => {
  if ('speechSynthesis' in window) {
    // 発言を設定
    const uttr = new SpeechSynthesisUtterance()
    uttr.text = "残り5分なのだ、!" 
    uttr.pitch = 1.4 
    // 発言を再生
    window.speechSynthesis.speak(uttr)
  } else {
    console.log('大変申し訳ありません。このブラウザは音声合成に対応していません。')
  } 
};
  console.log(minutes);
  useEffect(() => {
    if (minutes === 0) {
      handleStopTimer();
    } else if (minutes === 5) {
      handleFiveminTimer();
    }
  }, [minutes]);

  const playStart = () => {
    startVoice.play();
  };

  // ここで他のオプションを設定できます。
  // 例: msg.voice = voices[10]; msg.pitch = 1.4;

  return (
    <div className='text-sm md:text-3xl z-10' style={{ textAlign: 'center' }}>
      <h1>
        25分間は勉強！その後5分間は休憩するのだ！<br />これがポモドーロテクニックなのだ！
      </h1>
      <div className="text-5xl md:text-9xl">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <div className='flex flex-col mt-2'>
        <button onClick={pause}>
          STOP
        </button>
        <button
          className="text-red-600"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 1500);
            restart(time);
            playStart();
          }}
        >
          START / RESTART
        </button>
        <button onClick={start}>
          RESUME
        </button>
        <button onClick={handleStopTimer} />
        <button onClick={handleFiveminTimer} />
      </div>
      {minutes === 5 ? <Fivemin /> : <></>}
    </div>
  );
};

export default TimerComponent;
