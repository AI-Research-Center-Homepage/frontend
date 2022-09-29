import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-07-17
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
          width: "100vw",
        }}
      >
        {/* 사진 */}
        <CardMedia
          component="img"
          sx={{ width: 200, p: 2 }}
          image={post.image}
          alt="random"
        />

        {/* 내용 */}
        <CardContent
          sx={{
            flexDirection: "column",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* 이름 */}
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              p: 1,
              fontSize: "28px",
            }}
          >
            {post.name}
          </Typography>

          {/* 전공 */}
          <Typography
            variant="body1"
            sx={{
              p: 1,
            }}
          >
            {post.major}
          </Typography>

          {/* 연구실 위치 */}
          <Typography
            variant="body1"
            sx={{
              p: 1,
            }}
          >
            {post.location}
          </Typography>

          {/* 입학 년도 */}
          {post.admission && (
            <Typography
              variant="body1"
              sx={{
                p: 1,
              }}
            >
              {post.admission}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MemberPost;
