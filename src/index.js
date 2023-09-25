import React from "react";
import  ReactDOM  from "react-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from "./components-solo-1/header";


function App() {
  return (
    <div className="App">
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
        >
          {/* Content for the first layer */}
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1.2}
        >
          {/* Content for the second layer */}
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.9}
          speed={0.9}
          factor={2}
        >
          {/* Content for the third layer */}
          <Header />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));