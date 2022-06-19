import React, { useState, useEffect } from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import "./Field.scss";
import axios from "axios";

// postman url
const url = "https://a84a481a-47f6-4c36-ab58-950a84e6604d.mock.pstmn.io";

// map함수에 사용되는 더미데이터
// const FieldName = [
//   {
//     id: 0,
//     engTitle: "trans",
//     title: "기계번역",
//     participants: "기계번역의 부제목..",
//     desc: "인간이 사용하는 자연 언어를 컴퓨터를 사용하여 다른 언어로 번역한다.{' '} 최근 딥러닝 알고리즘을 통해 수준 높은 기계번역을 할 수 있게 되었다. 연구실에서 무슨 프로젝트를 어떻게 하고있고 어쩌구",
//   },
//   {
//     id: 1,
//     engTitle: "qaa",
//     title: "질의응답",
//     participants: "질의응답의 부제목..",
//     desc: "사용자의 질의에 대한 답변이 될 수 있는 정답을 문서 집합내에서 탐색하여 사용자에게 제시해주는 시스템이다. 일반적으로 질의응답 시스템은 사용자의 질의에 관련된 문서를 검색하는 후보검색 단계 (candidate retrieval phase) 와 검색된 문서 내에서 정답을 생성하는 정답추출 단계 (answer extraction phase) 로 구성된다. 연구실에서 무슨 프로젝트를 어떻게 하고있고 어쩌구",
//   },
//   {
//     id: 2,
//     engTitle: "exobrain",
//     title: "엑소 브레인",
//     participants: "엑소브레인의 부제목..",
//     desc: "인간의 지적 노동을 보조할 수 있는 언어처리 분야의 AI 기술개발을 위해, 전문직 종사자의 조사·분석 등의 지식노동을 보조 가능한 기술 개발 및 국내외 표준화를 통해 핵심 IPR을 확보하는 우리나라 대표 인공지능 국가 R&D 프로젝트이다. 연구실에서 무슨 프로젝트를 어떻게 하고있고 어쩌구",
//   },
//   {
//     id: 3,
//     engTitle: "natural",
//     title: "자연어 처리",
//     participants: "자연어 처리의 부제목..",
//     desc: "인간의 언어 현상을 컴퓨터와 같은 기계를 이용해서 묘사할 수 있도록 연구하고 이를 구현한다. <br></br>NLP에는 인간의 의사 소통 방식과 컴퓨터의.이해력의 간극을 메우기 위해 컴퓨터 과학이나 전산 언어학 등 많은 분야가 동원된다. <br></br>무슨 프로젝트를 어떻게 하고있고 어쩌구",
//   },
//   {
//     id: 4,
//     engTitle: "first_null",
//     title: "빈칸1",
//     participants: "내용없음",
//     desc: "내용없음",
//   },
//   {
//     id: 5,
//     engTitle: "second_null",
//     title: "빈칸2",
//     participants: "내용없음",
//     desc: "내용없음",
//   },
//   {
//     id: 6,
//     engTitle: "third_null",
//     title: "빈칸3",
//     participants: "내용없음",
//     desc: "내용없음",
//   },
//   {
//     id: 7,
//     engTitle: "fourth_null",
//     title: "빈칸4",
//     participants: "내용없음",
//     desc: "내용없음",
//   },
// ];

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
        <span className="light">{props.participants}</span>
      </Typography>

      {/* 설명 */}
      <Typography
        variant="body2"
        color="#757575"
        align="center"
        paddingTop="2%"
        paddingBottom="10%"
      >
        {props.desc}
      </Typography>
    </Box>
  );
}

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-06-19
 *@description 프로젝트 페이지
 */
export default function Project() {
  const [contents, setContents] = useState("기계번역");
  const [objects, setObjects] = useState({});

  // mock api 데이터를 받아옴
  useEffect(() => {
    axios.get(url + "/project").then((response) => {
      setObjects(response.data);
    });
  }, []);

  // title만 모아 map으로 FieldPrint 함수에 전달하기 위한 배열
  let fieldName = [
    objects.trans?.projects[0].title,
    objects.qaa?.projects[0].title,
    objects.exobrain?.projects[0].title,
    objects.natural?.projects[0].title,
    objects.first_null?.projects[0].title,
    objects.second_null?.projects[0].title,
    objects.third_null?.projects[0].title,
    objects.fourth_null?.projects[0].title,
  ];

  // 클릭한 버튼의 name값을 state에 저장
  const buttonValueSetting = (e) => {
    const { name } = e.target;
    setContents(name);
  };

  // name값에 따라 다른 화면 출력
  const selectComponent = {
    기계번역: (
      <Description
        title={objects.trans?.projects[0].title}
        participants={objects.trans?.projects[0].participants}
        desc={objects.trans?.projects[0].description}
      />
    ),
    질의응답: (
      <Description
        title={objects.qaa?.projects[0].title}
        participants={objects.qaa?.projects[0].participants}
        desc={objects.qaa?.projects[0].description}
      />
    ),
    "엑소 브레인": (
      <Description
        title={objects.exobrain?.projects[0].title}
        participants={objects.exobrain?.projects[0].participants}
        desc={objects.exobrain?.projects[0].description}
      />
    ),
    "자연어 처리": (
      <Description
        title={objects.natural?.projects[0].title}
        participants={objects.natural?.projects[0].participants}
        desc={objects.natural?.projects[0].description}
      />
    ),
    빈칸1: (
      <Description
        title={objects.first_null?.projects[0].title}
        participants={objects.first_null?.projects[0].participants}
        desc={objects.first_null?.projects[0].description}
      />
    ),
    빈칸2: (
      <Description
        title={objects.second_null?.projects[0].title}
        participants={objects.second_null?.projects[0].participants}
        desc={objects.second_null?.projects[0].description}
      />
    ),
    빈칸3: (
      <Description
        title={objects.third_null?.projects[0].title}
        participants={objects.third_null?.projects[0].participants}
        desc={objects.third_null?.projects[0].description}
      />
    ),
    빈칸4: (
      <Description
        title={objects.fourth_null?.projects[0].title}
        participants={objects.fourth_null?.projects[0].participants}
        desc={objects.fourth_null?.projects[0].description}
      />
    ),
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
          {fieldName.map((title) => (
            <Grid item md={3} xs={6} marginBottom={0.5}>
              <FieldPrint title={title}></FieldPrint>
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
