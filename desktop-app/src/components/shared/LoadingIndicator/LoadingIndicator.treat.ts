import { style } from 'treat';

export const loadingIndicatorContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const animation = {
  '@keyframes': {
    '0%': {
      transform: 'scale(0)',
    },
    '40%': {
      transform: 'scale(1)',
    },
    '80%': {
      transform: 'scale(0)',
    },
    '100%': {
      transform: 'scale(0)',
    },
  },
  animationDuration: '1.4s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
  animationFillMode: 'both',
};

const pointStyle = {
  backgroundColor: 'gray',
  width: '1vw',
  height: '1vw',
  borderRadius: '50%',
};

export const firstPoint = style({
  ...pointStyle,
  ...animation,
  animationDelay: '-0.32s',
});

export const secondPoint = style({
  ...pointStyle,
  ...animation,
  marginLeft: '7%',
  animationDelay: '-0.16s',
});

export const thirdPoint = style({
  ...pointStyle,
  ...animation,
  marginLeft: '7%',
});
