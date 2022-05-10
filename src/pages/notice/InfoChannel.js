import * as React from "react";

import { CssBaseline, Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FeaturedPost from "../../components/FeaturedPost";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

/**
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-11
 *@name info
 *@description
 *    소식통 dummy data
 */
const info_data = [
  {
    id: 1,
    header_subtitle: "소식통",
    title: "1번 컨텐츠",
    subtitle: "1번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    header_subtitle: "소식통",
    title: "2번 컨텐츠",
    subtitle: "2번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    header_subtitle: "소식통",
    title: "3번 컨텐츠",
    subtitle: "3번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 4,
    header_subtitle: "소식통",
    title: "4번 컨텐츠",
    subtitle: "4번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 5,
    header_subtitle: "소식통",
    title: "5번 컨텐츠",
    subtitle: "5번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 6,
    header_subtitle: "소식통",
    title: "6번 컨텐츠",
    subtitle: "6번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 7,
    header_subtitle: "소식통",
    title: "7번 컨텐츠",
    subtitle: "7번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 8,
    header_subtitle: "소식통",
    title: "8번 컨텐츠",
    subtitle: "8번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
];

/**
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-11
 *@name Post
 *@description
 *    FeaturedPost 컴포넌트 불러서 info data 화면에 뿌려주기
 */

const theme = createTheme();

export default function Post() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />
      <SubHeader main="소식" sub="소식통" />
      {/* 정렬 위아래 padding 너비 auto에 최대너비 고정 */}
      <Container
        sx={{
          py: 8,
          width: "auto",
        }}
        maxWidth="md"
      >
        <Grid container spacing={4}>
          {info_data.map((post) => (
            <FeaturedPost post={post} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
