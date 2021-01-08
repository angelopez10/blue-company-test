import React from "react";
import { Container as StyledContainer, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    marginLeft: "20%",
    marginTop: "5%",
    width: "80%",
    height: "50%",
  },
}));

const Container = ({ children }) => {
  const classes = useStyles();
  return (
    <StyledContainer className={classes.container}>{children}</StyledContainer>
  );
};

export default Container;
