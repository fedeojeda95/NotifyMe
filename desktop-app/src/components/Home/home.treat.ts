import { style } from 'treat';

export const container = style({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'row',
});

export const intervalContainer = style({
  width: '100%',
  height: '8vh',
});

export const statusContainer = style({
  width: '100%',
  height: '20vh',
});

export const infoContainer = style({
  width: '30%',
  marginLeft: '10px',
  '@media': {
    'screen and (max-width: 450px)': {
      display: 'none',
    },
  },
});

export const itemsContainer = style({
  width: '65%',
  '@media': {
    'screen and (max-width: 450px)': {
      width: '100%',
    },
  },
});

export const divider = style({
  marginRight: '25px',
  marginTop: '25px',
  marginBottom: '25px',
});
