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
 *@description 학부연구원생들의 정보를 게시글 형식으로 렌더링하는 페이지
 */

const Undergraduates = () => {
  const [members, setMembers] = useState({ undergraduate: [] });

  const getMembers = async () => {
    try {
      const response = await axios.get("/api/undergraduate");
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

      <SubHeader main="구성원" sub="학부연구원생" />

      {/* 연구원 정보 */}
      <Container sx={{ width: "80%", my: 6 }}>
        <Grid container spacing={6}>
          {members.undergraduate.map((undergraduate) => (
            <MemberPost post={undergraduate} key={undergraduate.id} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Undergraduates;
