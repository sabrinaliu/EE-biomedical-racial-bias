import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import logo from './logo.svg';
import './App.css';

function App() {
  let parallax;
  return (
    <div className="App">
    <Parallax pages={2} ref={ref => parallax = ref}>
      <ParallaxLayer offset={0} speed={-1}>
        <div className="intro">
          <header>Racial Bias in Biomedical Devices</header>
          <p className="intro-desc">Recent news reports often discuss racial biases in medical care, from the interactions between patient and physicians to the machine learning algorithms[1] used to diagnose individuals. These issues have been furthered noticed with the recent pandemic as well as the growing trend as more technology is incorporated into hospitals. Biomedical devices are no exception.
          In trying to understand how these biases can be built into these devices, the spirometer and the racial correction factor serves as a case study that can show how the problem can be addressed in these devices in general.</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0}>
        <div className="spirometry">
          <header>What is spirometry?</header>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.9} speed={3}>
        <span>I'm fast!</span>
      </ParallaxLayer>

      <ParallaxLayer speed={-0.2} offset={1.3}>
        <span>I'm going in the other direction!</span>
      </ParallaxLayer>
    </Parallax>


    </div>

  );
}

export default App;
