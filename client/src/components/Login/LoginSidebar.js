import React from 'react'
import { 
  Grid, 
  Box,
  Typography 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import background from "../../assets/bg-img.png";
import bubbleIcon from '../../assets/bubble.svg';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage:`linear-gradient(
      ${theme.palette.primary.main}85, 
      ${theme.palette.gradient.main}), 
      url(${background})`,
    backgroundSize:'cover',
    height: '100vh',
    margin: '0',
    padding: '0',
  },
  text: theme.loginSidebar.text
}));



export default function LoginSidebar() {
  const classes = useStyles();

  return (
    <Box display={{ xs: 'none', sm: 'block' }}>
      <Grid container spacing={5} className={classes.image} direction="column" justify="center" alignItems="center">
        <Grid item>
          <img src={bubbleIcon} alt="Message Icon" />
        </Grid>
        <Typography className={classes.text}>Converse with anyone</Typography>
        <Typography className={classes.text}>with any language</Typography>
      </Grid>
    </Box>
  )
}
