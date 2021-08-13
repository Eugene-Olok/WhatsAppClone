import React from 'react'
import './Sidebar.css'
import { Chat, DonutLarge, SearchOutlined } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import SidebarChat from "./SidebarChat"

function Sidebar(props) {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar />
        <div className='sidebar_headerRight'>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <DonutLarge />
          </IconButton>
        </div>
      </div>
      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or Start new chat' />
        </div>
      </div>
      <div className="sidebar_chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
      </div>
    </div>
  )
}

export default Sidebar
