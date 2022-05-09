import React, { useState } from "react";
import { Stack, Button, Grid, Container } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import MemberPost from "../../components/MemberPost";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-05-02
 *@description 년도(올해, 작년)를 선택하여
 *             해당하는 년도에 입학한 대학원생을 랜더링
 */

const researchs = [
  {
    name: "이름1",
    content: "분야 및 상세 설명1",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "이름2",
    content: "분야 및 상세 설명2",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "이름3",
    content: "분야 및 상세 설명3",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "이름4",
    content: "분야 및 상세 설명4",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "이름5",
    content: "분야 및 상세 설명5",
    image: "https://source.unsplash.com/random",
  },
];

const Researcher = () => {
  return (
    <>
      <Header />

      <SubHeader main="구성원" sub="연구원" />

      {/* 연구원 정보 */}
      <Container sx={{ width: "80%", my: 6 }}>
        <Grid container spacing={2}>
          {researchs.map((research) => (
            <MemberPost post={research} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Researcher;
