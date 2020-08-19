import React from 'react';
import { Card, CardContent, Typography, Link } from '@material-ui/core/';

function Solutions() {
  return (
        <div className="background-style" id="race-correction">
          <Typography className="title" variant="h3">Lessons Learned and Moving Forward</Typography>
          <Card id="spiro-card">
            <CardContent id="spiro-text">
              <Typography variant="body1" component="p">
              Unfortunately, the bias found in spirometers is not unique. There are many other cases of racial biases found in other biomedical devices, as well as other medical treatments. However, this device and its history does point towards potential solutions:

                <ul>
                  <li>
                  First and foremost, <b>the spirometer is often used as a cautionary tale against relying too heavily on race-based medicine</b>. In this particular case, lung capacity can be dramatically affected by ones environment, specifically the air pollution levels where individuals live. As has been seen multiple times in history, race serves again as a proxy for socioeconomic gaps, here marked by lower air quality in poorer neighborhoods. It reminds us that having diverse clinical trials and collecting racial data is important -- it is impossible to address these societal issues without first knowing about them, <Link href="https://www.nytimes.com/interactive/2020/07/05/us/coronavirus-latinos-african-americans-cdc-data.html">as can be seen with the current pandemic</Link>. However, while we collect such information, it is important to remember to look for these systemic issues instead of accepting genetics as the source of all problems.
                  </li>

                  <li>
                  Along spirometry's history, there were individuals that raised suspicion about the race correction factor, even though their concerns were not addressed. <b>This highlights the need for ensuring meaningful diversity in the engineers and physicians developing biomedical devices</b>. While it is a first step to have members from various backgrounds present at the decision table, all individuals need to be open-minded and take input, no matter who it is from, seriously.
                  </li>

                  <li>
                  It is important to note that the perpetuation of the usage of the race correction factor by clinicians largely comes from ignorance, not malice. For a current physician or engineer who may be faced with the next spirometer, it can be difficult to identify such racial biases, especially when they are presented as longstanding, well-established standards. However, <b>by incorporating classes in ethnic studies and history, among other subjects, in the curriculum of medical professionals and biomedical engineers</b> can provide context in which various devices were designed and encourage critical thinking about similar issues.
                  </li>

                  <li>
                  For the spirometer and many other devices that have already reached the consumer, it can be difficult to encourage change. The development cycle for biomedical technology is relatively slow due to the large number of safety approvals before reaching the public. Therefore, <Link href="https://healthvoices.org.au/issues/november-2017/ethics-advanced-medical-devices-need-new-approach/">many researchers allocate significant resources to designing and improving new devices but few focus on the post-release</Link>. <b>By having national medical and government organizations implement and fund a system for vetting and reassessing devices on the market for equity and effectiveness at regular time intervals</b> will help make sure that such biases do not go unchecked. If problems are pinpointed, a deadline needs to be set for the issue to be resolved and products to be redesigned and released. Spending funds on such an initiative will preserve the quality of biomedical devices even as the field continues to adapt and grow.
                  </li>

                </ul>
              </Typography>
            </CardContent>
          </Card>
        </div>

  );
}

export default Solutions;
