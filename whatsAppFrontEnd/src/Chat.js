import { Avatar, IconButton } from '@material-ui/core'
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from '@material-ui/icons'
import React, { useState } from 'react'
import './Chat.css'

import axios from 'axios'

function Chat({ messages }) {
  const [input, setInput] = useState('')

  const sendMessage = async (e) => {
    // e.preventDefault()

    await axios.post('/messages/new', {
      message: input,
      name: 'ECHO APP',
      timestamp: 'JUST NOW',
      received: false,
    })

    setInput('')
  }

  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar />
        <div className='chat_headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        {messages.map((message) => (
          <p className={`chat message ${message.received && 'chat_receiver'}`}>
            <span className='chat_name'>{message.name}</span>
            {message.message}
            <span className='chat_timestamp'>{new Date().toUTCString()}</span>
          </p>
        ))}
      </div>
      <div className='chat_footer'>
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Type a message'
          />
          <button type='submit' onClick={sendMessage()}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  )
}

export default Chat
