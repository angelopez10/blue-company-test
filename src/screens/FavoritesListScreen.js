import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import FavoritesList from "../components/Favorites";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "25%",
    marginTop: "80px",
  },
}));

const FavoritesListScreen = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <FavoritesList />
    </Container>
  );
};

export default FavoritesListScreen;
