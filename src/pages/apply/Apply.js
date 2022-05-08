import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";

import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";

const Apply = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <SubHeader main={"지원하기"} sub={"지원하기"} />

      <Container
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "80%",
        }}
      >
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
            연구실 설명
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            sx={{
              fontSize: {
                xl: "1.2rem",
                md: "1rem",
              },
            }}
          >
            전북대학교 AI연구실은 혁신을 이끌어가는 어쩌구 저쩌구 이러쿵 저러쿵
            <br></br>
            그리고 어찌저찌 해서 이렇게 유명하다.
            <br></br>
            <br></br>
            노예가 되고싶나? 그럼 당장 지원하도록!
          </Typography>
        </Box>
        <Container
          disableGutters
          sx={{ display: "flex", width: "100%", mb: "3%" }}
        >
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
                pb: 2,
                fontSize: {
                  xl: "2.0rem",
                  lg: "1.5rem",
                  md: "1.0rem",
                },
              }}
            >
              지원기간
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
              1차 지원 : 06/25 ~ 07/03
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
              2차 지원 : 07/05 ~ 07/10
            </Typography>
          </Box>
          <Box sx={{ width: "30%", border: "1px solid" }}>
            <Button
              variant="text"
              sx={{
                width: "100%",
                height: "100%",
                color: "black",
                fontWeight: "bold",
                fontSize: {
                  xl: "2.0rem",
                  lg: "1.5rem",
                  md: "1.0rem",
                },
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
