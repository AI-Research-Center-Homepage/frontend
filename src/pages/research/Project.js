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
  );
}

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-07-12
 *@description 프로젝트 페이지
 */
export default function Project() {
  const [titles, setTitles] = useState();
  const [objects, setObjects] = useState({});

  // mock api 데이터를 받아옴
  useEffect(() => {
    axios.get(url + "/project").then((response) => {
      setObjects(response.data);
    });
  }, []);

  const Data = objects?.projects;
  console.log(Data);
  const fieldName = Data && Data.map((data) => data.fieldName);
  const firstField = Data[0].projects;
  const secondField = Data[1].projects;
  const thirdField = Data[2].projects;
  const fourthField = Data[3].projects;
  const fifthField = Data[4].projects;
  const sixthField = Data[5].projects;
  const seventhField = Data[6].projects;
  const eighthField = Data[7].projects;

  // 클릭한 버튼의 name값을 state에 저장
  const buttonValueSetting = (e) => {
    const { name } = e.target;
    setTitles(name);
  };

  // name값에 따라 다른 화면 출력
  const selectComponent = {
    [fieldName[0]]: firstField.map((data) => (
      <Description
        title={data.title}
        participants={data.participants}
        desc={data.description}
        contents={data.content}
      />
    )),
    [fieldName[1]]: secondField.map((data) => (
      <Description
        title={data.title}
        participants={data.participants}
        desc={data.description}
        contents={data.content}
      />
    )),
    [fieldName[2]]: thirdField.map((data) => (
      <Description
        title={data.title}
        participants={data.participants}
        desc={data.description}
        contents={data.content}
      />
    )),
    [fieldName[3]]: fourthField.map((data) => (
      <Description
        title={data.title}
        participants={data.participants}
        desc={data.description}
        contents={data.content}
      />
    )),
    [fieldName[4]]: fifthField.map((data) => (
      <Description
        title={data.title}
        participants={data.participants}
        desc={data.description}
        contents={data.content}
      />
    )),
    [fieldName[5]]: sixthField.map((data) => (
      <Description
        title={data.title}
        participants={data.participants}
        desc={data.description}
        contents={data.content}
      />
    )),
    [fieldName[6]]: seventhField.map((data) => (
      <Description
        title={data.title}
        participants={data.participants}
        desc={data.description}
        contents={data.content}
      />
    )),
    [fieldName[7]]: eighthField.map((data) => (
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
          {Data &&
            Data.map((data) => (
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
