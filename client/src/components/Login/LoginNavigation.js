import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Box, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  routePadding: theme.loginNavigation.navigationBar,
  text: {
    fontSize: theme.loginNavigation.text.fontSize,
    color: theme.palette.secondary.main,
  },
}));

export default function LoginNavigation(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box width="80%" height="90%">
      <Grid
        container
        item
        spacing={3}
        className={classes.routePadding}
        justify="flex-end"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.text}>{props.text}</Typography>
        </Grid>
        <Grid item>
          <Paper elevation={4}>
            <Button
              size="large"
              className={classes.margin}
              color="primary"
              onClick={() => history.push(props.route)}
            >
              {props.button}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
