import React, { useState } from 'react';
import MessageBox from './MessageBox';

function MessageList() {
  const [messages, setMessages] = useState([]);

  const addMessage = () => {
    setMessages([...messages, { title: '', content: '' }]);
  };

  const deleteMessage = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  const updateMessage = (index, title, content) => {
    const newMessages = [...messages];
    newMessages[index].title = title;
    newMessages[index].content = content;
    setMessages(newMessages);
  };
        return (
                <div>
                  <button onClick={addMessage}>Add message</button>
                  {messages.map((message, index) => (
                    <MessageBox key={index} title={message.title} content={message.content} />
                  ))}
                </div>
            );
}
export default MessageList;