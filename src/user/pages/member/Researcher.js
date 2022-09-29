import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Container } from "@mui/material";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import MemberPost from "../../components/MemberPost";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-07-17
 *@description 연구원들의 정보를 게시글 형식으로 렌더링하는 페이지
 */

const Researcher = () => {
  const [researchersData, setResearchersData] = useState({ researcher: [] });

  useEffect(() => {
    axios
      .get(
        "https://8d020d2f-f787-45d5-88de-64d4ae1c030c.mock.pstmn.io/researchers"
      )
      .then((response) => {
        setResearchersData(response.data);
      });
  }, []);

  return (
    <>
      <Header />

      <SubHeader main="구성원" sub="연구원" />

      {/* 연구원 정보 */}
      <Container sx={{ width: "80%", my: 6 }}>
        <Grid container spacing={6}>
          {researchersData.researcher.map((researcher) => (
            <MemberPost post={researcher} key={researcher.id} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Researcher;
