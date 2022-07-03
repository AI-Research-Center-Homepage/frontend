import React, { useEffect, useState } from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import "./Field.scss";
import axios from "axios";

//mock api url
const url = "https://fff2349a-733d-4c0e-bb44-455e017469c0.mock.pstmn.io";

// selectComponent에서 데이터를 받아와 각 화면을 보여줌
function Description(props) {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }; // 컴포넌트가 언마운트되기 직전에 이벤트 제거
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      {/* 큰 제목 */}
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        color="black"
        align="center"
        fontWeight="bold"
      >
        {props.title}
      </Typography>

      {/* 설명 */}
      <Typography
        variant="body2"
        color="#757575"
        align="center"
        paddingTop="2%"
        style={{ opacity: (position - position / 1.8) / 100 }}
      >
        {props.desc}
      </Typography>
    </Box>
  );
}

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-05-31
 *@description 연구분야 페이지
 */

export default function ResearchField() {
  const [apiList, setAPIList] = useState({});

  // API로 정보 받기
  useEffect(() => {
    axios.get(url + "/field").then((response) => {
      setAPIList(response.data);
    });
  }, []);

  // 랩실 설명
  const content = (
    <div style={{ textAlign: "center" }}>
      <span style={{ color: "#0288d1" }}>
        <strong>학습, 추론, 자연언어</strong>
      </span>
      를 이해할 수 있는 새로운 계산 시스템인
      <br />
      <span style={{ color: "#0288d1" }}>
        <strong>인지 컴퓨팅 시스템 연구</strong>
      </span>
      를 수행하고 있습니다.
    </div>
  );

  console.log(apiList); //undefined

  let FieldName = [];
  FieldName = apiList?.fields.map((list) => list.fieldName);

  let FieldDesc = [];
  FieldDesc = apiList?.fields.map((list) => list.description);

  const [contents, setContents] = useState();

  // 클릭한 버튼의 name값을 state에 저장
  const buttonValueSetting = (e) => {
    const { name } = e.target;
    setContents(name);
  };

  // name값에 따라 다른 화면 출력
  const selectComponent = {
    [FieldName[0]]: <Description title={FieldName[0]} desc={FieldDesc[0]} />,
    [FieldName[1]]: <Description title={FieldName[1]} desc={FieldDesc[1]} />,
    [FieldName[2]]: <Description title={FieldName[2]} desc={FieldDesc[2]} />,
    [FieldName[3]]: <Description title={FieldName[3]} desc={FieldDesc[3]} />,
    [FieldName[4]]: <Description title={FieldName[4]} desc={FieldDesc[4]} />,
    [FieldName[5]]: <Description title={FieldName[5]} desc={FieldDesc[5]} />,
    [FieldName[6]]: <Description title={FieldName[6]} desc={FieldDesc[6]} />,
    [FieldName[7]]: <Description title={FieldName[7]} desc={FieldDesc[7]} />,
  };

  // 버튼 함수
  function FieldPrint({ title }) {
    return (
      <Button
        variant="contained"
        sx={{
          borderRadius: 0,
          width: "100%",
          color: "#212121",
          backgroundColor: "white",
          fontSize: "1.2vw",
          "&:hover": {
            backgroundColor: "#0288d1",
            color: "#fafafc",
            transition: "0.5s",
          },
        }}
        onClick={buttonValueSetting}
        name={title}
      >
        {title}
      </Button>
    );
  }

  return (
    <div>
      <Header />
      <SubHeader main="연구" sub="AI연구분야" />

      {/* 랩실 설명을 꾸며주는 기능 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            p: 2,
            m: 2,
            borderBottom: 1,
            borderTop: 1,
            borderColor: "#bdbdbd",
            width: "40%",
          }}
        >
          <Typography>{content}</Typography>
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          marginBottom: "5%",
          width: "100%",
          height: { xs: 300, md: 200 },
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* 버튼함수인 FieldPrint를 호출하여 버튼8개를 만듦 */}
        <Grid
          container
          sx={{
            width: { md: "80%", xs: "90%" },
          }}
        >
          {apiList?.fields.map((list) => (
            <Grid item md={3} xs={6} marginBottom={0.5}>
              <FieldPrint title={list.fieldName}></FieldPrint>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 버튼마다 다른 컴포넌트 나오게 하였음 */}
      {contents && selectComponent[contents]}
      <Footer />
    </div>
  );
}
