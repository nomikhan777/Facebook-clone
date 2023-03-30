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

      <Post 
      profilePic="https://avatars.githubusercontent.com/u/24712956?v=4"
      message=" wow this works!"
      timestamp= "this is a timestamp"
      username="Sangha bhai"
      image="https://avatars.githubusercontent.com/u/24712956?v=4"
      />
      <Post 
      profilePic="https://avatars.githubusercontent.com/u/24712956?v=4"
      message=" wow this works!"
      timestamp= "this is a timestamp"
      username="Sangha bhai"
      image="https://avatars.githubusercontent.com/u/24712956?v=4"
      />
      <Post />
    
        

    </div>
  )
}

export default Feed