import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import { GlobalContext } from '../../context/GlobalState';
import shoes from "../../shoes.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    textAlign: 'center',

  }
});
export const Home = () => {
  const classes = useStyles();
  const { addToCart } = useContext(GlobalContext);
  return (
    <div className={classes.root}>
      
      <Grid container spacing={4}>
        {Object.entries(shoes).map(([shoe, { name, img, desc, price }]) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={img[0]}
                    title={name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                      {desc}
                    </Typography> */}
                    <Typography variant="h5">
                      Price: ${price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => addToCart(shoe)}>
                    Add To Cart
                  </Button>
                  <Link to={`detail/${shoe}`} style={{ "textDecoration": "none" }}>
                    Details
                  </Link>
                </CardActions>
              </Card >
            </Grid>
          )
        })}

      </Grid>
    </div>
  )
};