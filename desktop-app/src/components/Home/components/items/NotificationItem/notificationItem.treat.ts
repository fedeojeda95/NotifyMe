import { style } from 'treat';

export const container = style({
  height: '215px',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
  marginTop: '15px',
  borderRadius: '5px',
  borderStyle: 'solid',
  borderColor: 'grey',
  borderWidth: '0.1px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  padding: '2px 16px',
  ':hover': {
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
  },
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const infoContainer = style({});

export const actionsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginRight: '5px',
  marginTop: '5px',
});

export const goToPrLink = style({
  marginBottom: '10px',
});

export const markAsReadButton = style({});

export const title = style({
  fontSize: 22,
  fontWeight: 'bold',
});

export const infoName = style({
  fontSize: 16,
  color: 'gray',
  marginBottom: 0,
});

export const infoContent = style({
  marginTop: 2,
  fontSize: 18,
});
