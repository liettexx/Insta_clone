import React from 'react';
import './Homepage.css';
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';

function Homepage() {
  return (
    <div className='homepage'>
        <div className='homepage__navWrapper'>
            <Sidenav />
        </div>
        <div className='homepage__timeline'>
            <Timeline />
        </div>
    </div>
  );
}

export default Homepage;

