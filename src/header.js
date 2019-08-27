import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';

export default function Header() {

  return (
    <div className="row header">
        <Box display="flex" justifyContent="flex-start" m={1} p={1} bgcolor="background.paper">
            <Box p={1} bgcolor="grey.300">
            ICON 
            </Box>
            <Box p={1} bgcolor="grey.300">
              Home
            </Box>
            <Box p={1} bgcolor="grey.300">
              Services
            </Box>
            <Box p={1} bgcolor="grey.300">
                Photos
            </Box>
       </Box>


    </div>
  );
}

