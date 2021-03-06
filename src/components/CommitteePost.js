import * as React from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

/*
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-07-15
 *@name CommitteePost
 *@description
 *    사진이 포함된 세로 형태의 게시글 컴포넌트
 */

function CommitteePost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardActionArea component="a" href="#">
        {/* flexDirection 기준을 column으로 배열 */}
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            {/* 크기 xs 일 때 none */}
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

export default CommitteePost;
