import React from 'react'
import StoryReel from './StoryReel';
import './Feed.css';
import Post from './Post';
import MessageSender from './MessageSender';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel/>
      <MessageSender />

      <Post />
      <Post />
      <Post />
    
        

    </div>
  )
}

export default Feed