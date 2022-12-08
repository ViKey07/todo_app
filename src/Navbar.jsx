import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography className='nav' variant="h3" fontFamily={'Ariel'} component="div" sx={{ flexGrow: 1 }}>
            To - Do List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
