import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardActionArea component="a" href="#">
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <CardMedia
              component="img"
              sx={{
                width: 200,
                m: "auto",
                display: { xs: "none", sm: "block" },
              }}
              image={post.image}
              alt="random"
            />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              {post.position}
            </Typography>
            <Typography component="h2" variant="h5">
              {post.name}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.major}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
