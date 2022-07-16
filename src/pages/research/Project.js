import React, { useState, useEffect } from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import "./Field.scss";
import axios from "axios";

// postman url
const url = "https://a4149427-81af-4b54-9358-9e16682d2eb5.mock.pstmn.io";

// selectComponent에서 데이터를 받아와 각 화면을 보여줌
function Description(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        marginBottom: 10,
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

      {/* 부제목 */}
      <Typography variant="h6" fontWeight="bold" align="center" paddingTop="3%">
        <span className="light">{props.desc}</span>
      </Typography>

      {/* 설명 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: { md: "80%", xs: "40%" } }}>
          <Typography
            variant="body2"
            color="#757575"
            align="center"
            paddingTop="2%"
            paddingBottom="10%"
          >
            {props.contents}
          </Typography>
        </Box>
      </div>

      {/* 참여자 */}
      <Box
        sx={{
          p: 2,
          m: 2,
          borderBottom: 2,
          borderTop: 1,
          borderTopColor: "#bdbdbd",
        }}
      >
        <Typography>{props.participants}</Typography>
      </Box>
    </Box>
  );
}

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-07-12
 *@description 프로젝트 페이지
 */
export default function Project() {
  const [titles, setTitles] = useState();
  const [objects, setObjects] = useState({ projects: [] });

  // mock api 데이터를 받아옴
  useEffect(() => {
    axios.get(url + "/project").then((response) => {
      setObjects(response.data);
    });
  }, []);

  let nameList = [];
  nameList = objects.projects.map((data) => data.fieldName);

  const firstField = objects.projects[0];
  const secondField = objects.projects[1];
  const thirdField = objects.projects[2];
  const fourthField = objects.projects[3];
  const fifthField = objects.projects[4];
  const sixthField = objects.projects[5];
  const seventhField = objects.projects[6];
  const eighthField = objects.projects[7];

  // 클릭한 버튼의 name값을 state에 저장
  const buttonValueSetting = (e) => {
    const { name } = e.target;
    setTitles(name);
  };

  // name값에 따라 다른 화면 출력
  const selectComponent = {
    [nameList[0]]:
      firstField &&
      firstField.projects.map((data) => (
        <Description
          title={data.title}
          participants={data.participants}
          desc={data.description}
          contents={data.content}
        />
      )),
    [nameList[1]]:
      secondField &&
      secondField.projects.map((data) => (
        <Description
          title={data.title}
          participants={data.participants}
          desc={data.description}
          contents={data.content}
        />
      )),
    [nameList[2]]:
      thirdField &&
      thirdField.projects.map((data) => (
        <Description
          title={data.title}
          participants={data.participants}
          desc={data.description}
          contents={data.content}
        />
      )),
    [nameList[3]]:
      fourthField &&
      fourthField.projects.map((data) => (
        <Description
          title={data.title}
          participants={data.participants}
          desc={data.description}
          contents={data.content}
        />
      )),
    [nameList[4]]:
      fifthField &&
      fifthField.projects.map((data) => (
        <Description
          title={data.title}
          participants={data.participants}
          desc={data.description}
          contents={data.content}
        />
      )),
    [nameList[5]]:
      sixthField &&
      sixthField.projects.map((data) => (
        <Description
          title={data.title}
          participants={data.participants}
          desc={data.description}
          contents={data.content}
        />
      )),
    [nameList[6]]:
      seventhField &&
      seventhField.projects.map((data) => (
        <Description
          title={data.title}
          participants={data.participants}
          desc={data.description}
          contents={data.content}
        />
      )),
    [nameList[7]]:
      eighthField &&
      eighthField.projects.map((data) => (
        <Description
          title={data.title}
          participants={data.participants}
          desc={data.description}
          contents={data.content}
        />
      )),
  };

  // FieldName의 데이터를 받아 버튼 출력
  function FieldPrint({ title }) {
    return (
      <Button
        variant="contained"
        sx={{
          borderRadius: 0,
          width: "100%",
          color: "#212121",
          backgroundColor: "white",
          fontSize: "15px",
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
      <SubHeader main="연구" sub="연구 프로젝트" />

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
          {objects.projects.map((data) => (
            <Grid item md={3} xs={6} marginBottom={0.5}>
              <FieldPrint title={data.fieldName}></FieldPrint>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 버튼마다 다른 컴포넌트 나오게 하였음 */}
      {titles && selectComponent[titles]}
      <Footer />
    </div>
  );
}
