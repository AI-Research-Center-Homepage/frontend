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
 *@date 2022-10-03
 *@description
 *    FeaturedPost 컴포넌트 불러서 committee data 화면에 뿌려주기
 */

export default function Committee() {
  const [members, setMembers] = useState({ committee: [] });

  const getMembers = async () => {
    try {
      const response = await axios.get("/api/committee");
      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
      <CssBaseline />

      <Header />
      <SubHeader main="구성원" sub="운영위원회" />

      <Container
        sx={{
          py: 8,
          width: "auto",
        }}
        maxWidth="md"
      >
        <Grid container spacing={4}>
          {members.committee.map((post) => (
            <CommitteePost post={post} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
}
