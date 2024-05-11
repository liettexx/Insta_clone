import React, { useState } from 'react';
import './Timeline.css';
import Suggestions from './Suggestions';
import Post from './posts/Post';

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "redian_",
            postImage: 
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7fMSeN7zGL2q-xVu5bfXaAHaHa%26pid%3DApi&f=1&ipt=a64a9b2e61767b9f073a1c03e8b51ecc41ecaa29227ec2f58555d1b65cf6aae7&ipo=images",
            likes: 122,
            timestamp: "2d",
        },
        {
            user: "johndoe",
            postImage: 
                "https://i.pinimg.com/474x/e3/e6/09/e3e609540fd386675f7b73cfdab17662.jpg",
            likes: 56,
            timestamp: "12h",
        },
        {
            user: "marissa_w",
            postImage: 
                "https://i.pinimg.com/564x/30/d6/fc/30d6fc0c7a8f1385d8887f147c65a0b0.jpg",
            likes: 140,
            timestamp: "35m",
        },
        {
            user: "khurelz",
            postImage: 
                "https://i.pinimg.com/474x/e0/f5/9c/e0f59c294c6de5b397550b1ee9e36421.jpg",
            likes: 256,
            timestamp: "1d",
        },
    ]);

  return (
    <div className='timeline'>
        <div className='timeline__left'>
            <div className='timeline__posts'>
                {posts.map((post) => (
                    <Post 
                        user={post.user} 
                        postImage={post.postImage} 
                        likes={post.likes} 
                        timestamp={post.timestamp}
                    />
                ))}
            </div>
        </div>
        <div className="timeline__right">
            <Suggestions />
        </div>
    </div>
  );
}

export default Timeline;

