import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "max-content",
    padding: "8px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function HomeComponent() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <main className="site-main">
        <section className="site-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 site-title">
                <h3 className="title-text">Hey, I am Glen</h3>
                <h4 className="title-text text-uppercase">Junior Developer</h4>
                <div class="paragraph py-4 w-75">
                  <p class="para">
                    I am currently building this site, Please come back again
                    soon
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 banner-image">
                <img
                  src="./../../assets/img/banner/banner-image.png"
                  alt="banner-img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
