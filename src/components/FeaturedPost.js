import * as React from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

/**
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-07-06
 *@name FeaturedPost
 *@description
 *    사진이 포함된 세로 형태의 게시글 컴포넌트
 *    info channel과 article 페이지에 적용
 */

function FeaturedPost({ post, onClick }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardActionArea component="a" onClick={onClick}>
        {/* flexDirection 기준을 column으로 배열 */}
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle2" paragraph>
              {post.boardName}
            </Typography>
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
            <Typography component="h2" variant="h5" sx={{ mt: 3 }}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.modifiedDate.slice(0, 10)}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
