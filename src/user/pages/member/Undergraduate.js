import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Container } from "@mui/material";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import MemberPost from "../../components/MemberPost";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-10-02
 *@description 학부연구원생들의 정보를 게시글 형식으로 렌더링하는 페이지
 */

const Undergraduates = () => {
  const [undergraduatesData, setUndergraduatesData] = useState({
    undergraduate: [],
  });

  useEffect(() => {
    axios
      .get(
        //"https://8d020d2f-f787-45d5-88de-64d4ae1c030c.mock.pstmn.io/undergraduates"
        "/api/undergraduate"
      )
      .then((response) => {
        setUndergraduatesData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <Header />

      <SubHeader main="구성원" sub="학부연구원생" />

      {/* 연구원 정보 */}
      <Container sx={{ width: "80%", my: 6 }}>
        <Grid container spacing={6}>
          {undergraduatesData.undergraduate.map((undergraduate) => (
            <MemberPost post={undergraduate} key={undergraduate.id} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Undergraduates;
