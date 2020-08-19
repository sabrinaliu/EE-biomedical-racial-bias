import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

function Spirometer() {
  return (
    <div className="background-style" id="spirometry">
      <header>What is spirometry?</header>
      <Card id="spiro-card">
        <CardContent id="spiro-text">
          <Typography variant="body1" component="p">
              Spirometry is a clinical test used by physicians to assess the respiratory health of a patient by measuring inhalation and exhalation speed and exhalation volume. By comparing these measurements to set standards, doctors can use the results to diagnose a patient with chronic lung conditions, like asthma, COPD, or pulmonary fibrosis, or just use it as a monitoring tool before surgeries or at a check-up to measure lung health.
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          alt="Spirometer"
          image={require("../static/spiro_test.webp")}
          title="Spirometer"
        />
      </Card>
    </div>
  );
}

export default Spirometer;
