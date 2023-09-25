import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './index.css';
import moon from './images/moon.jpg';
import landing from './images/landing.jpg';
import shorse from './images/myshorse.jpeg';
import shorse2 from './images/shorsefly.png';
import backgroundVideo from './images/story.mp4'; // Import your video file

function App() {
  const ref = React.useRef();
  return (
    <div className="App" ref={ref}>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer
        onClick={() => ref.current.scrollTo(1)}
         
          
        >
          {/* Add a video */}
          <video autoPlay  muted className="video-class">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.8}
          speed={2}
          factor={3}
          onClick={() => ref.current.scrollTo(2)}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className='headers'>we are on the moon</h1>
        </ParallaxLayer>


        <ParallaxLayer
         offset={2}
          speed={1} 
          factor={1}
           style={{ backgroundImage: `url(${landing})` }}
            onClick={() => ref.current.scrollTo(0.4)}>
          <h1 className='footers'>we are on land now</h1>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 3.5 }}>
          <img src={shorse2} className="shorse" alt="shorse" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
