import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link } from '@material-ui/core/';

function RaceCorrection() {
  return (
        <div className="background-style" id="race-correction">
          <Typography className="title" variant="h3">The Race Correction Factor</Typography>
          <Card id="spiro-card">
            <CardMedia
              component="img"
              alt="Spirometer"
              image={require("../static/spirometer_display.jpg")}
              title="Spirometer"
            />
            <CardContent id="spiro-text">
              <Typography variant="body1" component="p">
              What is considered a standard result for an individual can vary greatly. Digital spirometers will often ask physicians to input information about the patient before the test begins. These involve factors like age, gender, height, weight, and also race.</Typography>
              <Typography variant="body1" component="p">
              There has not been no identified genetic factor that would suggest inherent differences in lung capacity between races. In addition, it can be imprecise as physicians often just eyeball it instead of directly asking their patients. However, the "racial correction factor" leads to very different standards depending on the person. <Link href="https://journals.physiology.org/doi/full/10.1152/advan.00196.2017">In the U.S., spirometers set the standard for a "normal" spirometer result in African Americans to be 10-15% lower and in Asians to be 4% lower than that of Caucasians</Link>.
              </Typography>
              <Typography variant="body1" component="p">
              As a result, given two individuals who have all the same attributes - same gender, weight, height - but one is African American and one is Caucasian, even if they have the same lung capacity, it is possible for the Black individual to walk out of the doctor's office and be classified as healthy while the white individual may be deemed ill, leading to the latter receiving more medical care. Spirometry is also an important test used in various <Link href="https://www.osha.gov/Publications/OSHA3637.pdf">occupational health checks</Link>. Looking at solely asbestos trust funds, <Link href="https://www.mesotheliomagroup.com/paying-for-treatment/asbestos-trust-funds/">3.3 million claims have been filed since they began in 1988, translating to $17.5 billion of compensation paid to workers</Link>. The race correction factor can directly lead to bias in who receives such compensation.
              </Typography>
            </CardContent>
          </Card>
        </div>

  );
}

export default RaceCorrection;
