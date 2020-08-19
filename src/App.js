import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { Card, CardContent, Typography } from '@material-ui/core/';
import Spirometer from './content_components/Spirometer';
import RaceCorrection from './content_components/RaceCorrection';
import History from './content_components/History';
import Solutions from './content_components/Solutions';
import './App.css';

function App() {
  let parallax;

  return (
    <div className="App background-style">
    <Parallax pages={5} ref={ref => parallax = ref}>
      <ParallaxLayer offset={.3} speed={8} style={{alignContent:"center"}}>
        <Card className="space-left-border" style={{backgroundColor: "black"}}>
          <Typography className="title" variant="h2">Racial Bias in Biomedical Devices</Typography>
          <CardContent>
          <Typography className="intro-desc" variant="subtitle1">
          Recent news reports often discuss racial biases in medical care, from the interactions between patient and physicians to the machine learning algorithms used to diagnose individuals. These issues have been furthered noticed with the recent pandemic as well as the growing trend as more technology is incorporated into hospitals. Biomedical devices are no exception.
          </Typography>
          <Typography className="intro-desc" variant="subtitle1">
          In trying to understand how these biases can be built into these devices, the spirometer and the race correction factor serves as a case study that can show how the problem can be addressed in these devices in general.
          </Typography>
          </CardContent>
        </Card>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={.5}>
        <Spirometer />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0}>
        <RaceCorrection />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={.5}>
        <History />
      </ParallaxLayer>

      <ParallaxLayer offset={4.05} speed={0}>
        <Solutions />
      </ParallaxLayer>
    </Parallax>


    </div>

  );
}

export default App;
