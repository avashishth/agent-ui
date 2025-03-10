import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = () => {
    axios.post('http://127.0.0.1:5000/send_message', { message: userInput })
      .then((response) => {
        const newAiResponse = response.data.ai_response;
        setConversation([
          ...conversation,
          { role: 'user', content: userInput },
          { role: 'ai', content: newAiResponse },
        ]);
        setUserInput('');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  const formatMessage = (content) => {
    let formattedContent = content.split('\n').map((line, index) => {
      if (line.startsWith('* ')) {
        const text = line.substring(2);
        return <li key={index}>{formatBold(text)}</li>;
      }
      return <p key={index}>{formatBold(line)}</p>;
    });

    if (formattedContent.some(item => item.type === 'li')) {
      formattedContent = <ul>{formattedContent}</ul>;
    }

    return formattedContent;
  };

  const formatBold = (text) => {
    if (!text) return null;
    let parts = text.split('**');
    let formattedParts = [];
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 1) {
        formattedParts.push(<strong key={i}>{parts[i]}</strong>);
      } else {
        formattedParts.push(parts[i]);
      }
    }
    return formattedParts;
  };

  return (
    <div style={styles.container}>
      <div style={styles.conversationContainer}>
        {conversation.map((message, index) => (
          <div key={index} style={message.role === 'user' ? styles.userMessage : styles.aiMessage}>
            <strong>{message.role === 'user' ? 'User:' : 'AI:'}</strong>
            {message.role === 'ai' ? formatMessage(message.content) : message.content}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <textarea
          style={styles.textarea}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button style={styles.sendButton} onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
  },
  conversationContainer: {
    flexGrow: 1,
    overflowY: 'auto',
    border: '1px solid #ddd',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    maxHeight: '70vh', // Adjust height to avoid vertical scrollbars
  },
  userMessage: {
    marginBottom: '10px',
    textAlign: 'left',
    backgroundColor: '#e0f7fa',
    padding: '10px',
    borderRadius: '8px',
    alignSelf: 'flex-end',
    paddingLeft: '20px', // Add left padding
  },
  aiMessage: {
    marginBottom: '10px',
    textAlign: 'left',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    alignSelf: 'flex-start',
    paddingLeft: '20px', // Add left padding
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textarea: {
    flexGrow: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginRight: '10px',
    resize: 'vertical',
    fontSize: '16px',
  },
  sendButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default App;