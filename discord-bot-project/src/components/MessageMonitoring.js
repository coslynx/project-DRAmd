import React, { useState, useEffect } from 'react';

const MessageMonitoring = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from backend API
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://backend-api/messages');
        if (response.ok) {
          const data = await response.json();
          setMessages(data.messages);
        } else {
          throw new Error('Failed to fetch messages');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  const deleteMessage = async (messageId) => {
    try {
      const response = await fetch(`http://backend-api/messages/${messageId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setMessages(messages.filter((message) => message.id !== messageId));
      } else {
        throw new Error('Failed to delete message');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Message Monitoring</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            {message.content}
            <button onClick={() => deleteMessage(message.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageMonitoring;