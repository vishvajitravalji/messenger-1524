import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingBottom: theme.spacing(3),
  },
  margin: {
    marginBottom: theme.spacing(20),
  },
  fontSize: {
    fontSize: "2.5rem",
  },
}));

export default function LoginForm(props) {
  const classes = useStyles();

  return (
    <Box width="60%"  className={classes.margin} >
      <Grid>
        <Typography className={classes.fontSize} >Welcome back!</Typography>
      </Grid>
      <form onSubmit={props.handleLogin}>
        <Grid container direction="column">
          <FormControl required   className={classes.padding}>
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"
            />
          </FormControl>
          <FormControl required className={classes.padding}>
            <TextField
              label="Password"
              aria-label="password"
              type="password"
              name="password"
            />
          </FormControl>
         
            <Button 
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Login
            </Button>

        </Grid>
      </form>
    </Box>
  );
}
