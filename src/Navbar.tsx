import { Box } from '@mui/material';
import React from 'react'
import {useStyles} from './styles'

type NavbarProps={
    dark:boolean
}

function Navbar(props:NavbarProps) {
  const classes = useStyles(props);
  return (
      <>
        {/* Using makeStyles/useStyles hooks */}
        <Box component='div' p={2} className={classes.root}>Hello</Box>
        {/* Inline Css */}
        <Box component='div' p={2} mt={4} style={{color:'white',background:'green',textAlign:'center'}}>Hello</Box>
        {/* using sx */}
        <Box component='div' p={2} mt={4} sx={{color:'white',background:'blue',textAlign:'center',}}>Hello</Box>
        {/* Using Attributes */}
        <Box component='div' p={2} mt={4} color='white' bgcolor='black' textAlign='center' >Hello</Box>
      </>
  )
}

export default Navbar