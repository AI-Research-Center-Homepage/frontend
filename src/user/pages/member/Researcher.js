import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Container } from "@mui/material";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import MemberPost from "../../components/MemberPost";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-10-03
 *@description 연구원들의 정보를 게시글 형식으로 렌더링하는 페이지
 */

const Researcher = () => {
  const [members, setMembers] = useState({ researcher: [] });

  const getMembers = async () => {
    try {
      const response = await axios.get("/api/researcher");
      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
      <Header />

      <SubHeader main="구성원" sub="연구원" />

      {/* 연구원 정보 */}
      <Container sx={{ width: "80%", my: 6 }}>
        <Grid container spacing={6}>
          {members.researcher.map((researcher) => (
            <MemberPost post={researcher} key={researcher.id} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Researcher;
