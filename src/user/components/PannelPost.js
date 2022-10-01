import * as React from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";

/**
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-06-20
 *@name PannelPost
 *@description
 *    논문 데이터에 맞게 제작한 컴포넌트
 *    koName, enName이 하나일 때
 */

function PannelPost(props) {
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
            mt: 3,
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              {post.journal}
            </Typography>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.koName} {post.enName}
            </Typography>
            <Typography variant="overline" paragraph>
              {post.PublishDate}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default PannelPost;
