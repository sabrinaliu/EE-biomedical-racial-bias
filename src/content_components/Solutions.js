import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

function Solutions() {
  return (
        <div className="background-style" id="race-correction">
          <header>Lessons Learned and Moving Forward</header>
          <Card id="spiro-card">
            <CardContent id="spiro-text">
              <Typography variant="body1" component="p">
              The bias found in spirometers is not unique. There are many other cases of racial biases found in biomedical devices, as well as other medical treatments. However, this device and its history does point towards potential solutions:

                <ul>
                  <li>
                  First and foremost, <b>the spirometer is used as a cautionary tale against relying too heavily on race-based medicine</b>. In this particular case, lung capacity can be dramatically affected by ones environment, specifically the air pollution levels where individuals live. In a case that has been played out multiple times in history, race, here, serves as a proxy for socioeconomic gaps and lower air quality in poorer neighborhoods. It reminds us that racial data is important -- it is not possible to address these differences without knowledge about it. However, while we collect racial data, it is important to remember to look for these systemic societal issues instead of accepting it as a genetic source of all problems.
                  </li>

                  <li>
                  Along spirometry's history, individuals did ring the alarm that raised suspicion about the racial correction factor, even though their concerns were not addressed. <b>This highlights the need for ensuring meaningful diversity in the engineers and physicians developing biomedical devices</b>. While it is a first step to have members from differing backgrounds present, others need to make sure to respect their voice at the table and their input need to be taken seriously. MENTION PATIENTS INVOLVED IN TRIALS AND DIVERSITY
                  </li>

                  <li>
                  MENTION OFTEN NOT PURPOSEFUL For a current physician or engineer who may be faced with the next spirometer, it can be difficult to identify such racial biases, especially when they are presented as longstanding, well-established standards. However, <b>by incorporating classes in ethnic studies and history, among other subjects, in the curriculum of those in the biomedical community </b> can give perspective about the context in which they were designed and encourage critical thinking about such issues.
                  </li>

                  <li>
                  For the spirometer and many other devices that have already reached the consumer, it can be difficult to encourage change. The development cycle for biomedical technology is relatively slow due to the large number of approvals they have to receive to ensure that they are safe for the public. Therefore, many researchers allocate significant resources to designing and improving new devices but few focus on the post-release. <b>By having national and government organizations implement and fund a system for vetting and reassessing devices on the market for equity and effectiveness at regular time intervals </b> will help make sure that such biases do not go unchecked. If problems are pinpointed, a deadline needs to be set for the issue to be resolved and products to be redesigned and released. Spending funds on such an initiative will preserve the quality of biomedical devices even as the field continues to adapt and grow.

                  </li>

                </ul>
              </Typography>
            </CardContent>
          </Card>
        </div>

  );
}

export default Solutions;