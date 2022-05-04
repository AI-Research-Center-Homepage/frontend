import React, { useState } from "react";
import {
  Stack,
  Button,
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-05-02
 *@description 년도(올해, 작년)를 선택하여
 *             해당하는 년도에 입학한 대학원생을 랜더링
 */

const ButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedSizeLarge: sx({
          color: "black",
          borderColor: "black",
          borderRadius: 0,
          px: 6,
          py: 1,
        }),
        root: {
          ":hover": {
            border: "0",
          },
        },
      },
    },
  },
});

const dummys = [
  { name: "이름1", content: "분야 및 상세 설명1", year: 2022 },
  { name: "이름2", content: "분야 및 상세 설명2", year: 2022 },
  { name: "이름3", content: "분야 및 상세 설명3", year: 2022 },
  { name: "이름4", content: "분야 및 상세 설명4", year: 2021 },
  { name: "이름5", content: "분야 및 상세 설명5", year: 2021 },
];

const getStringYear = (date) => {
  let year = date.getFullYear();
  return `${year}`;
};

const Graduate = () => {
  const [selectedYear, SetSelectedYear] = useState("all");

  let year = getStringYear(new Date());

  return (
    <>
      <Header />

      <SubHeader main="구성원" sub="대학원생" />

      {/* 년도 선택 버튼 그룹 */}
      <ThemeProvider theme={ButtonTheme}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ my: 6, display: "flex" }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{ border: "0", boxShadow: "5" }}
            onClick={() => SetSelectedYear("all")}
          >
            ALL
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ border: "0", boxShadow: "5" }}
            onClick={() => SetSelectedYear(parseInt(year))}
          >
            {year}
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ border: "0", boxShadow: "5" }}
            onClick={() => SetSelectedYear(parseInt(year - 1))}
          >
            {year - 1}
          </Button>
        </Stack>
      </ThemeProvider>

      {/* 대학원생 정보 */}
      <Container sx={{ width: "80%", my: 6 }}>
        <Grid container spacing={2}>
          {dummys
            .filter((dummy) => {
              if (selectedYear === "all" || selectedYear === dummy.year)
                return true;
              return false;
            })
            .map((dummy) => (
              <Grid item key={dummy} sm={12} md={6} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    boxShadow: "5",
                    borderRadius: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: "20%", p: 2 }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent
                    sx={{
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        boxShadow: "3",
                        height: "30%",
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                      }}
                      gutterBottom
                    >
                      {dummy.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      // 사진 크기에 따라 height percent 값을 수정해줘야함.
                      sx={{
                        height: "58%",
                        p: 1,
                        boxShadow: "3",
                      }}
                    >
                      {dummy.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Graduate;
