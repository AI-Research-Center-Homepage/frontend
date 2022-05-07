import * as React from "react";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   CssBaseline,
//   Grid,
//   Typography,
//   Container,
//   CardActionArea,
//   Divider,
// } from "@mui/material";
import { CssBaseline, Grid, Container } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
// import { ArticleContext } from "../App";
// import PageMoveButtons from "./PageMoveButtons";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import FeaturedPost from "../../components/FeaturedPost";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

/*******************************************
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-08
 *@name article
 *@description
 *    운영위원회 dummy data
 *******************************************/
const dummyCards = [
  { id: 1, title: "언론보도", name: "1번 컨텐츠", major: "220322" },
  { id: 2, title: "언론보도", name: "2번 컨텐츠", major: "220323" },
  { id: 3, title: "언론보도", name: "3번 컨텐츠", major: "220324" },
  { id: 4, title: "언론보도", name: "4번 컨텐츠", major: "220325" },
  { id: 5, title: "언론보도", name: "5번 컨텐츠", major: "220326" },
  { id: 6, title: "언론보도", name: "6번 컨텐츠", major: "220327" },
  { id: 7, title: "언론보도", name: "7번 컨텐츠", major: "220328" },
  { id: 8, title: "언론보도", name: "8번 컨텐츠", major: "220329" },
];

/*******************************************
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-08
 *@name Post
 *@description
 *    FeaturedPost 컴포넌트 불러서 article data 화면에 뿌려주기
 *******************************************/

const theme = createTheme();

export default function Post() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />
      <SubHeader main="구성원" sub="운영위원회" />
      {/* 정렬 위아래 padding 너비 auto에 최대너비 고정 */}
      <Container
        sx={{
          py: 8,
          width: "auto",
        }}
        maxWidth="md"
      >
        <Grid container spacing={4}>
          {dummyCards.map((post) => (
            <FeaturedPost post={post} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
