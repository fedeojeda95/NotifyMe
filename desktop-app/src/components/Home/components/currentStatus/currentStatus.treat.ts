import { style } from 'treat';

export const name = style({
  fontSize: 18,
  color: 'gray',
  margin: 0,
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export const amount = style({
  fontSize: 24,
  margin: 0,
});

export const loadingContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

export const loadingText = style({
  width: '100%',
  textAlign: 'center',
});

export const loadingIndicator = style({
  width: '100%',
  height: '30px',
});
