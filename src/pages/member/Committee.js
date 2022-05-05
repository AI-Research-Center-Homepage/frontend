import * as React from "react";
import { CssBaseline, Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FeaturedPost from "../../components/FeaturedPost";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

// @author BeomGi-Lee, jeongiun@naver.com
// @date 2022-05-04
// @description 운영위원회 dummy data
const committee = [
  {
    position: "원장",
    name: "김원장",
    major: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    position: "연구부원장",
    name: "박부원장",
    major: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    position: "기획부원장",
    name: "이부원장",
    major: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    position: "플랫폼기술부장",
    name: "최부장",
    major: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    position: "응용기술부장",
    name: "정부장",
    major: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    position: "기획대외협력부장",
    name: "부부장",
    major: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
];

// @author BeomGi-Lee, jeongiun@naver.com
// @date 2022-05-04
// @description FeaturedPost 컴포넌트 불러서 committee data 화면에 뿌려주기
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
          {committee.map((post) => (
            <FeaturedPost post={post} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
