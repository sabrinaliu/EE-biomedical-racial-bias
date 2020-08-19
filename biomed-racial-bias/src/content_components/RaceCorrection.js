import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

function RaceCorrection() {
  return (
        <div className="background-style" id="race-correction">
          <header>The Race Correction Factor</header>
          <Card id="spiro-card">
            <CardMedia
              component="img"
              alt="Spirometer"
              image={require("../static/spiro_test.webp")}
              title="Spirometer"
            />
            <CardContent id="spiro-text">
              <Typography variant="body1" component="p">
              What is considered a standard result for an individual can vary greatly. Digital spirometers will often ask physicians to input information about the patient before the test begins. These involve factors like age, gender, height, weight, and also race.
              There has not been no identified genetic factor that would suggest inherent differences in lung capacity between races. In addition, it can be imprecise as physicians often just eyeball it instead of directly asking their patients. However, the "racial correction factor" leads to very different standards depending on the person. In the U.S., spirometers set the standard for a "normal" spirometer result in African Americans to be 10-15% lower than that of Caucasians.
              RESEARCH AND PUT IMPACTS HERE (asbestos)
              </Typography>
            </CardContent>
          </Card>
        </div>

  );
}

export default RaceCorrection;
