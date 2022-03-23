import React from 'react';
import { makeStyles } from '@mui/styles';

type StyleProps={
  dark:boolean
}

export const useStyles = makeStyles({
  root: (props:StyleProps) => {
    return{
      background: props.dark ? 'black': 'blue',
      height:100,
      textAlign:'center',
      fontSize:'1.2rem',
      color: props.dark ? 'white' :'white',
      '&:hover':{
        color:'red'
      },
      "@media (max-width: 1440px)":{
        background:'yellow',
        color:'green'
      }
    }
  },
})

