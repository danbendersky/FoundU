import './ButtonGroup.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="Basic button group" className = "nav-buttons">
        <Button id = "add-item">Add Item</Button>
        <Button id = "filter">Search & Filter</Button>
      </ButtonGroup>
    </Box>
  );
}