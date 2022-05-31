import React, { useState } from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import "./Field.scss";

// map함수에 사용되는 버튼 정보
const FieldName = [
  {
    id: 0,
    engTitle: "trans",
    title: "기계번역",
    subtitle: "기계번역의 부제목..",
    desc: "인간이 사용하는 자연 언어를 컴퓨터를 사용하여 다른 언어로 번역한다.{' '} 최근 딥러닝 알고리즘을 통해 수준 높은 기계번역을 할 수 있게 되었다. 연구실에서 무슨 프로젝트를 어떻게 하고있고 어쩌구",
  },
  {
    id: 1,
    engTitle: "qaa",
    title: "질의응답",
    subtitle: "질의응답의 부제목..",
    desc: "사용자의 질의에 대한 답변이 될 수 있는 정답을 문서 집합내에서 탐색하여 사용자에게 제시해주는 시스템이다. 일반적으로 질의응답 시스템은 사용자의 질의에 관련된 문서를 검색하는 후보검색 단계 (candidate retrieval phase) 와 검색된 문서 내에서 정답을 생성하는 정답추출 단계 (answer extraction phase) 로 구성된다. 연구실에서 무슨 프로젝트를 어떻게 하고있고 어쩌구",
  },
  {
    id: 2,
    engTitle: "exobrain",
    title: "엑소 브레인",
    subtitle: "엑소브레인의 부제목..",
    desc: "인간의 지적 노동을 보조할 수 있는 언어처리 분야의 AI 기술개발을 위해, 전문직 종사자의 조사·분석 등의 지식노동을 보조 가능한 기술 개발 및 국내외 표준화를 통해 핵심 IPR을 확보하는 우리나라 대표 인공지능 국가 R&D 프로젝트이다. 연구실에서 무슨 프로젝트를 어떻게 하고있고 어쩌구",
  },
  {
    id: 3,
    engTitle: "natural",
    title: "자연어 처리",
    subtitle: "자연어 처리의 부제목..",
    desc: "인간의 언어 현상을 컴퓨터와 같은 기계를 이용해서 묘사할 수 있도록 연구하고 이를 구현한다. <br></br>NLP에는 인간의 의사 소통 방식과 컴퓨터의.이해력의 간극을 메우기 위해 컴퓨터 과학이나 전산 언어학 등 많은 분야가 동원된다. <br></br>무슨 프로젝트를 어떻게 하고있고 어쩌구",
  },
  {
    id: 4,
    engTitle: "first_null",
    title: "빈칸",
    subtitle: "내용없음",
    desc: "내용없음",
  },
  {
    id: 5,
    engTitle: "second_null",
    title: "빈칸",
    subtitle: "내용없음",
    desc: "내용없음",
  },
  {
    id: 6,
    engTitle: "third_null",
    title: "빈칸",
    subtitle: "내용없음",
    desc: "내용없음",
  },
  {
    id: 7,
    engTitle: "fourth_null",
    title: "빈칸",
    subtitle: "내용없음",
    desc: "내용없음",
  },
];

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
        <span className="light">{props.subtitle}</span>
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
 *@date 2022-05-31
 *@description 프로젝트 페이지
 */
export default function Project() {
  const [contents, setContents] = useState("trans");

  // 클릭한 버튼의 name값을 state에 저장
  const buttonValueSetting = (e) => {
    const { name } = e.target;
    setContents(name);
  };

  // name값에 따라 다른 화면 출력
  const selectComponent = {
    trans: (
      <Description
        title={FieldName[0].title}
        subtitle={FieldName[0].subtitle}
        desc={FieldName[0].desc}
      />
    ),
    qaa: (
      <Description
        title={FieldName[1].title}
        subtitle={FieldName[1].subtitle}
        desc={FieldName[1].desc}
      />
    ),
    exobrain: (
      <Description
        title={FieldName[2].title}
        subtitle={FieldName[2].subtitle}
        desc={FieldName[2].desc}
      />
    ),
    natural: (
      <Description
        title={FieldName[3].title}
        subtitle={FieldName[3].subtitle}
        desc={FieldName[3].desc}
      />
    ),
    first_null: (
      <Description
        title={FieldName[4].title}
        subtitle={FieldName[4].subtitle}
        desc={FieldName[4].desc}
      />
    ),
    second_null: (
      <Description
        title={FieldName[5].title}
        subtitle={FieldName[5].subtitle}
        desc={FieldName[5].desc}
      />
    ),
    third_null: (
      <Description
        title={FieldName[6].title}
        subtitle={FieldName[6].subtitle}
        desc={FieldName[6].desc}
      />
    ),
    fourth_null: (
      <Description
        title={FieldName[7].title}
        subtitle={FieldName[7].subtitle}
        desc={FieldName[7].desc}
      />
    ),
  };

  // FieldName의 데이터를 받아 버튼 출력
  function FieldPrint({ title, id, engTitle }) {
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
        key={id}
        name={engTitle}
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
          {FieldName.map((list) => (
            <Grid item md={3} xs={6} marginBottom={0.5}>
              <FieldPrint
                title={list.title}
                id={list.id}
                engTitle={list.engTitle}
              ></FieldPrint>
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
