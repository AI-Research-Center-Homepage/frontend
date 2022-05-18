import * as React from "react";
import { CssBaseline, Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FeaturedPost from "../../components/FeaturedPost";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

import axios from "axios";

/*
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-04
 *@name committee
 *@description
 *    운영위원회 dummy data
 */

const committee = [
  {
    gray_subtitle: "원장",
    title: "김원장",
    subtitle: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    gray_subtitle: "연구부원장",
    title: "박부원장",
    subtitle: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    gray_subtitle: "기획부원장",
    title: "이부원장",
    subtitle: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    gray_subtitle: "플랫폼기술부장",
    title: "최부장",
    subtitle: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    gray_subtitle: "응용기술부장",
    title: "정부장",
    subtitle: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
  {
    gray_subtitle: "기획대외협력부장",
    title: "부부장",
    subtitle: "공과대학 컴퓨터 공학부",
    image:
      "https://w.namu.la/s/379ef8ae4f12fc04481c2cb7a97c2bdc901727b137c38fd652cc7aea80f74e56185fa0fd62658554fc3e6e79861aec73782db1d7ab3943275607e6623a46d09fe63412410041cd4b2b6ea4e740e6a290c8022da99c4d567b5533c100da0ed814",
  },
];

// function axiosTest() {
//   return axios
//     .get("https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/list")
//     .then((response) => response.data);
// }
async function axiosTest() {
  const response = await axios.get(
    "https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/list"
  );
  // console.log(response.data);
  return { response };
}

const result = axiosTest();
console.log(result);
console.log(result.data);

// axios({
//   method: "get",
//   url: "https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/list",
//   responseType: "json",
// }).then(function (response) {
//   // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   let result = response.data;
//   // console.log(result);
//   // console.log(response.data);
//   // return response.data;
//   return result;
// });

// console.log(result);
// console.log(axios());

// const mock_committee = axios();

// function getAll() {
//   return axios.get(
//     "https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/list"
//   );
// }
// const _results = getAll();
// console.log(_results);

/*
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-04
 *@name Post
 *@description
 *    FeaturedPost 컴포넌트 불러서 committee data 화면에 뿌려주기
 */

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
