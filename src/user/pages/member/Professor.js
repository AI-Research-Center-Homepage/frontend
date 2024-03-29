import * as React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

import axios from "axios";

// 불필요한 Typography 태그의 반복을 막기 위해 별도의 함수 사용
function ProfPrint({ title, info }) {
  return (
    <Typography variant="body2" color="text.secondary" component="div">
      <strong>{title}&nbsp;</strong>
      {info}
    </Typography>
  );
}

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-03
 *@description 참여교수 사진, 이름, 전공, 박사학위, 연구실, 전화번호를 보여줌
 */

export default function Professor() {
  // API로 받아온 정보 저장
  const [members, setMembers] = useState({ professor: [] });

  const getMembers = async () => {
    try {
      const response = await axios.get("/api/professor");
      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // API로 정보 받기
  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
      <Header />
      <SubHeader main="구성원" sub="참여교수" />
      <Grid container>
        <Grid item xs={12}>
          {members.professor.map((element) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  display: "flex",
                  boxShadow: 5,
                  my: 1,
                  width: { xs: "80%", md: "40%" },
                  maxHeight: 200,
                }}
              >
                {/* 교수 사진 */}
                <CardMedia
                  component="img"
                  sx={{
                    width: "150px",
                    height: "auto",
                    padding: "1%",
                  }}
                  image={element.image}
                  alt="image"
                />

                {/* 텍스트 정보 */}
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="body1">
                    <strong>{element.name}</strong>
                  </Typography>
                  <br></br>
                  <ProfPrint title="전공" info={element.major}></ProfPrint>
                  <ProfPrint title="연구실" info={element.location}></ProfPrint>
                  <ProfPrint
                    title="박사학위"
                    info={element.doctorate}
                  ></ProfPrint>
                  <ProfPrint title="전화번호" info={element.number}></ProfPrint>
                </CardContent>
              </Card>
            </div>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
