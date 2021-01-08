import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

import { useDispatch, useSelector } from "react-redux";
import {
  getFavoritesData,
  getProductsData,
} from "../../actions/favoritesActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: "#808080",
    color: "#ffffff",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const FavoritesList = () => {
  const [newProducts, setNewProducts] = useState("");
  const [newFavorites, setNewFavorites] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const { productsData, loading } = products;

  const favorites = useSelector((state) => state.favorites);
  const { favoritesData } = favorites;

  const handleFavorite = (id) => {
    const item = newProducts.find((element) => element.id === id);
    const updatedProducts = newProducts.filter((t) => t.id !== id);
    setNewProducts(updatedProducts);
    const updatedFavorites = newFavorites.push(item);
    setNewFavorites(updatedFavorites);
  };

  const handleUnfavorite = (id) => {
    const item = newFavorites.find((element) => element.id === id);
    const updatedFavorites = newFavorites.filter((t) => t.id !== id);
    setNewFavorites(updatedFavorites);
    const updatedProducts = newProducts.push(item);
    setNewProducts(updatedProducts);
  };

  useEffect(() => {
    dispatch(getProductsData());
    dispatch(getFavoritesData());
    setNewProducts(productsData);
    setNewFavorites(favoritesData);
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {loading && <CircularProgress />}
      <Grid container spacing={4}>
        {newProducts && (
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.title}>
              Productos
            </Typography>
            <div className={classes.demo}>
              <List>
                {newProducts &&
                  newProducts.map((item) => {
                    return (
                      <ListItem key={item.id}>
                        <ListItemText primary={item.producto} />
                        <ListItemSecondaryAction
                          onClick={() => handleFavorite(item.id)}
                        >
                          <IconButton>
                            <StarBorderIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  })}
              </List>
            </div>
          </Grid>
        )}

        {favoritesData && (
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.title}>
              Favoritos
            </Typography>
            <div className={classes.demo}>
              <List>
                {favoritesData &&
                  favoritesData.map((item) => {
                    return (
                      <ListItem key={item.id}>
                        <ListItemText primary={item.producto} />
                        <ListItemSecondaryAction
                          onClick={() => handleUnfavorite(item.id)}
                        >
                          <IconButton>
                            <StarIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  })}
              </List>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default FavoritesList;
