import * as React from "react";

import { CssBaseline, Grid, Container } from "@mui/material";

import FeaturedPost from "../../components/FeaturedPost";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

/**
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-08
 *@name article
 *@description
 *    언론보도 dummy data
 */
const dummyCards = [
  {
    id: 1,
    header_subtitle: "언론보도",
    title: "1번 컨텐츠",
    subtitle: "1번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    header_subtitle: "언론보도",
    title: "2번 컨텐츠",
    subtitle: "2번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    header_subtitle: "언론보도",
    title: "3번 컨텐츠",
    subtitle: "3번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 4,
    header_subtitle: "언론보도",
    title: "4번 컨텐츠",
    subtitle: "4번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 5,
    header_subtitle: "언론보도",
    title: "5번 컨텐츠",
    subtitle: "5번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 6,
    header_subtitle: "언론보도",
    title: "6번 컨텐츠",
    subtitle: "6번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 7,
    header_subtitle: "언론보도",
    title: "7번 컨텐츠",
    subtitle: "7번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 8,
    header_subtitle: "언론보도",
    title: "8번 컨텐츠",
    subtitle: "8번 컨텐츠 본문",
    image: "https://source.unsplash.com/random",
  },
];

/**
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-08
 *@name Post
 *@description
 *    FeaturedPost 컴포넌트 불러서 article data 화면에 뿌려주기
 */

export default function Post() {
  return (
    <div>
      <CssBaseline />

      <Header />
      <SubHeader main="소식" sub="언론보도" />
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
            <FeaturedPost post={post} main="소식" sub="언론보도" />
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
}
