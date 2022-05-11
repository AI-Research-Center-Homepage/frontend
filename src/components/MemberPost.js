import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-05-07
 *@description name, content, image 등이 포함된 게시글 컴포넌트
 */

const MemberPost = ({ post }) => {
  return (
    <Grid item key={post} sm={12} md={6} sx={{ display: "flex" }}>
      <Card
        sx={{
          display: "flex",
          boxShadow: "5",
          borderRadius: 0,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "20%", p: 2 }}
          image={post.image}
          alt="random"
        />
        <CardContent
          sx={{
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              height: "30%",
              display: "flex",
              alignItems: "center",
              pl: 1,
            }}
            gutterBottom
          >
            {post.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              p: 1,
            }}
          >
            {post.content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MemberPost;
