import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
function Count() {
  const [secondsLeft, setSecondsLeft] = useState(7 * 24 * 60 * 60);
  const [socket, setSocket] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);
  useEffect(() => {
    if (socket) {
      socket.on('countdown', (newSecondsLeft) => {
        setSecondsLeft(newSecondsLeft);
      });
      socket.on('connect_error', (error) => {
        console.error('Socket connection failed:', error);
      });
      socket.on('disconnect', (reason) => {
        console.error('Socket disconnected:', reason);
      });
      return () => {
        socket.off('countdown');
        socket.off('connect_error');
        socket.off('disconnect');
      };
    }
  }, [socket]);
  useEffect(() => {
    if (socket) {
      const countdownInterval = setInterval(() => {
        setSecondsLeft((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(intervalId);
            console.log('Countdown complete!');
            socket.emit('countdownComplete'); // notify server that countdown is complete
            return 0;
          } else {
            socket.emit('countdown', prevSeconds - 1); // send countdown updates to server
            return prevSeconds - 1;
          }
        });
      }, 2000);
      setIntervalId(countdownInterval);
      return () => clearInterval(countdownInterval);
    }
  }, [socket, intervalId]);
  useEffect(() => {
    if (socket) {
      socket.on('countdownStopped', () => {
        clearInterval(intervalId);
      });
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
        socket.emit('countdownStopped'); // notify server that countdown has been stopped
      };
    }
  }, [socket, intervalId]);
  const formatTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  return (
    <div className="countdown">
      <p>Time remaining: {formatTime(secondsLeft)}</p>
    </div>
  );
}
export default Count;