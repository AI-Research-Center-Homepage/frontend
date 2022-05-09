import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";

import introImage from "../../assets/images/introImage.jpg";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-05-09
 *@description 연구실 소개 페이지
 *             이미지는 http://imlab.yonsei.ac.kr/?p=913
 *             에서 임의로 가져왔습니다
 */

const Apply = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <SubHeader main={"지원하기"} sub={"지원하기"} />

      {/* 전체를 감싸는 Container */}
      <Container
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "80%",
        }}
      >
        {/* 연구실 소개 Box */}
        <Box
          sx={{
            width: "100%",
            minHeight: "400px",
            my: "3%",
            border: "1px solid black",
            p: 3,
          }}
        >
          <Typography
            align="center"
            sx={{
              mb: 3,
              fontWeight: "bold",
              fontSize: {
                xl: "2rem",
                md: "1.5rem",
              },
            }}
          >
            연구실 소개
          </Typography>

          {/* 이미지 */}
          <Card sx={{ boxShadow: 0, mb: 3 }}>
            <CardMedia
              component="img"
              image={introImage}
              sx={{ height: "400px" }}
            />
          </Card>

          {/* 소개 설명 */}
          <Typography
            align="center"
            sx={{
              fontSize: "1.2rem",
            }}
          >
            인지컴퓨팅 연구실에서 대학원생 및 박사 후 연구원을 수시 모집합니다.
            <br />
            (석사과정 및 석박사통합과정, 학석사연계과정, 박사후연구원)
          </Typography>
          <br />
          <ul>
            <li>
              <b>연구분야:</b> 자연언어처리, 정보검색 & 추천, 언어 &
              비전,기계학습
            </li>
            <ul type="circle">
              <li>
                <b>연구주제:</b> 딥러닝, 기계학습, 뉴로 심볼릭 AI, 베이지안
                딥러닝, 강화학습, 질의응답, 자연언어처리, 정보검색, 멀티모달,
                금융AI, 언어 & 비전, 장면 그래프 생성, 객체인식, 정보필터링 &
                추천, 인공지능, 데이터마이닝
              </li>
            </ul>
            <li>
              <b>지원 및 혜택:</b> 등록금 전액 및 연구장려금 지원, 국내/해외
              학회 참석 지원, 연구 성과급 지급 등
            </li>
            <li>
              분야를 선도할 높은 수준의 연구를 수행하는 것을 목표로 하고
              있습니다.
            </li>
            <li> 진학에 관심 있는 학생은 메일로 연락 바랍니다.</li>
          </ul>
        </Box>

        {/* 지원기간, 지원하기 Container */}
        <Container
          disableGutters
          sx={{ display: "flex", width: "100%", mb: "3%" }}
        >
          {/* 지원기간 */}
          <Box
            sx={{
              width: "67%",
              border: "1px solid",
              mr: "3%",
              p: 3,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mb: 2,
                fontSize: {
                  xl: "1.5rem",
                  md: "1rem",
                },
              }}
            >
              지원기간
            </Typography>
            <Typography variant="subtitle1">
              <ul>
                <li>
                  인공지능응용기술연구센터 홈페이지 개발 및 운영자 상시 모집
                  (학부생) - 2021 하반기
                </li>
                <ul type="circle">
                  <li>매월 소정의 연구개발 장학금 지급 예정</li>
                </ul>
              </ul>
            </Typography>
          </Box>

          {/* 지원하기 버튼 */}
          <Box sx={{ width: "30%", border: "1px solid" }}>
            <Button
              variant="text"
              sx={{
                width: "100%",
                height: "100%",
                color: "black",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              지원하기
            </Button>
          </Box>
        </Container>
      </Container>

      <Footer />
    </>
  );
};

export default Apply;
