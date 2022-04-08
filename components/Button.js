import React from 'react';

import StockButton from '@mui/material/Button';

const Button = (props) => {
  return (
    <StockButton
      variant="contained" 
      style={{ 
        paddingLeft: '1.8rem',
        paddingRight: '1.8rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        borderRadius: 50,
        backgroundColor: 'white',
        color: 'black'
      }}
      {...props}
    >
      {props.children}
    </StockButton>
  );
}

export default Button;
