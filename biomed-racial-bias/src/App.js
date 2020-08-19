import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Spirometer from './content_components/Spirometer';
import RaceCorrection from './content_components/RaceCorrection';
import History from './content_components/History';
import './App.css';

function App() {
  let parallax;
  return (
    <div className="App background-style">
    <Parallax pages={5} ref={ref => parallax = ref}>
      <ParallaxLayer offset={.3} speed={-1}>
        <div id="intro">
          <header>Racial Bias in Biomedical Devices</header>
          <p id="intro-desc">Recent news reports often discuss racial biases in medical care, from the interactions between patient and physicians to the machine learning algorithms[1] used to diagnose individuals. These issues have been furthered noticed with the recent pandemic as well as the growing trend as more technology is incorporated into hospitals. Biomedical devices are no exception.
          In trying to understand how these biases can be built into these devices, the spirometer and the racial correction factor serves as a case study that can show how the problem can be addressed in these devices in general.</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0}>
        <Spirometer />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0}>
        <RaceCorrection />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0}>
        <div id="effects">
          <header>Effects</header>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0}>
        <History />
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0}>
        <div id="solutions">
          <header>Potential Solutions</header>
        </div>
      </ParallaxLayer>
    </Parallax>


    </div>

  );
}

export default App;
