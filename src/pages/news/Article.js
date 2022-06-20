import * as React from "react";

import { CssBaseline, Grid, Container } from "@mui/material";

import FeaturedPost from "../../components/FeaturedPost";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

import { useEffect, useState } from "react";
import axios from "axios";

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
    title: "1번 컨텐츠",
    image: "https://source.unsplash.com/random",
    createdDate: "2022-01-01'T'00:00:00",
    modifiedDate: "2022-01-02'T'00:00:00",
  },
  {
    id: 2,
    title: "2번 컨텐츠",
    image: "https://source.unsplash.com/random",
    createdDate: "2022-01-03'T'00:00:00",
    modifiedDate: "2022-01-04'T'00:00:00",
  },
  {
    id: 3,
    title: "3번 컨텐츠",
    image: "https://source.unsplash.com/random",
    createdDate: "2022-01-05'T'00:00:00",
    modifiedDate: "2022-01-06'T'00:00:00",
  },
  {
    id: 4,
    title: "4번 컨텐츠",
    image: "https://source.unsplash.com/random",
    createdDate: "2022-01-07'T'00:00:00",
    modifiedDate: "2022-01-08'T'00:00:00",
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
  const [articleData, setArticle] = useState({ article: [] });
  useEffect(() => {
    axios
      .get(
        "https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/list/article2"
      )
      .then((response) => {
        setArticle(response.data);
      });
  }, []);

  console.log(articleData);
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
          {articleData.article.map((post) => (
            <FeaturedPost post={post} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
}
