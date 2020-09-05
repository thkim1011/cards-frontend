import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface ChatProps {
  socket?: SocketIOClient.Socket;
  sendHandler: (message: string) => void;
}

const Chat: React.FunctionComponent<ChatProps> = (props) => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    props.socket?.on('chat', (message: string) => {
      setMessages((messages) => [...messages, message]);
    });
    props.socket?.on('chatHistory', (oldMessages: string[]) => {
      setMessages((messages) => [...oldMessages, ...messages])
    })
  }, [props.socket]);
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.sendHandler(message);
      setMessage('');
    }
  }
  return <Box>
    <MessageContainer>
      {messages.map((message, index) => {
        return <div style={{ backgroundColor: index % 2 ? 'gray' : 'white' }}>{message}</div>
      })}
    </MessageContainer>
    <Input type='text' value={message} onChange={(event) => { setMessage(event.target.value) }} onKeyDown={onKeyDown} />
  </Box>
}

export default Chat;

const Box = styled.div`
    background-color: white;
    height: 500px;
`;

const MessageContainer = styled.div`
    overflow-y: scroll;
    height: 450px;
`;

const Input = styled.input`
    width: 100%;
`;