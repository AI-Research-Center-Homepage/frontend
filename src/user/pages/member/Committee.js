import * as React from "react";
import { CssBaseline, Grid, Container } from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";

import CommitteePost from "../../components/CommitteePost";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

/**
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-10-01
 *@name Post
 *@description
 *    FeaturedPost 컴포넌트 불러서 committee data 화면에 뿌려주기
 */

export default function Post() {
  const [committeeData, setCommittee] = useState({ committee: [] });
  useEffect(() => {
    axios
      .get(
        //"https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/list/committee2"
        "/api/committee"
      )
      .then((response) => {
        setCommittee(response.data);
      });
  }, []);

  console.log(committeeData);
  return (
    <div>
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
          {committeeData.committee.map((post) => (
            <CommitteePost post={post} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
}
