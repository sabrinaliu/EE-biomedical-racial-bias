import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Step, StepButton } from '@material-ui/core/';

export default function HistoryPopup(props) {
  return (
      <Step key={props.index}>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
            <StepButton {...bindTrigger(popupState)}>{props.year}</StepButton>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              style={{width:'33vh', textAlign:"center"}}
            >
              <Box p={2}>
                <Typography>{props.description}</Typography>
              </Box>
            </Popover>
            </div>
      )}
    </PopupState>
  </Step>
  );
}
