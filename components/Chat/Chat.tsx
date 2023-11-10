'use client'
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io('http://localhost:3001/socket.io');
    setSocket(newSocket);
  
    console.log('Socket connected!');
  
    newSocket.on('chat message', (message) => {
      setMessages([...messages, message]);
    });
  
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit('chat message', message);
  };

  return (
    <div>
      <h1>Chat</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input type="text" placeholder="Enter a message..." onKeyPress={(event) => {
        if (event.key === 'Enter') {
          sendMessage(event.target.value);
          event.target.value = '';
        }
      }} />
    </div>
  );
};

export default Chat;
