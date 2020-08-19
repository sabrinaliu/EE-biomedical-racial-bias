import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link } from '@material-ui/core/';

function Spirometer() {
  return (
    <div className="background-style">
      <Typography className="title" variant="h3">What is spirometry?</Typography>
      <Card id="spiro-card">
        <CardContent id="spiro-text">
          <Typography variant="body1" component="p">
              <Link href="https://www.mayoclinic.org/tests-procedures/spirometry/about/pac-20385201">Spirometry</Link> is a clinical test used by physicians to assess the respiratory health of a patient by measuring inhalation and exhalation speed and exhalation volume. By comparing these measurements to set standards, doctors can use the results to diagnose a patient with chronic lung conditions, like asthma, COPD, or pulmonary fibrosis, or use it as a monitoring tool before surgeries or at a regular check-up.
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
