import { CSSProperties } from 'react';

export const fontStyles: CSSProperties = {
  fontFamily: 'Noto Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '15px',
  lineHeight: '30px',
};

export const fontStylesBold: CSSProperties = {
  ...fontStyles,
  fontWeight: 'bold',
};
export const red: string = '#FF0000';

export const UlStyles: CSSProperties = {
  ...fontStyles,
  listStyle: 'disc',
  marginLeft: '24px',
};

export const sectionStyles: CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'rgba(229, 229, 229, 0.2)',
};

export const articleStyles: CSSProperties = {
  width: '100%',
  padding: '18px',
  maxWidth: '640px',
  boxSizing: 'border-box',
};
