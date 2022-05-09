import React, { useState } from "react";
import {
  Grid,
  Button,
  Stack,
  Divider,
  Typography,
  createTheme,
  ThemeProvider,
  styled,
} from "@mui/material";
import FieldTrans from "../components/ResearchPages/FieldTrans";
import FieldNLP from "../components/ResearchPages/FieldNLP";
import FieldML from "../components/ResearchPages/FieldML";
import FieldDL from "../components/ResearchPages/FieldDL";
import FieldNS from "../components/ResearchPages/FieldNS";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      danger: "#ff0000",
    },
    secondary: {
      main: "#d1d1d1",
    },
    neutral: {
      main: "#f9f9f9",
    },
  },
});

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-05-01
 *@description Divider 스타일
 */

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(3),
  },
}));

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-05-01
 *@description 연구분야 페이지
 */
export default function ResearchField() {
  //    랩실 설명
  const content = (
    <div style={{ textAlign: "center" }}>
      <span style={{ color: "#9fa8da" }}>
        <strong>학습, 추론, 자연언어</strong>
      </span>
      를 이해할 수 있는 새로운 계산 시스템인
      <br />
      <span style={{ color: "#9fa8da" }}>
        <strong>인지 컴퓨팅 시스템 연구</strong>
      </span>
      를 수행하고 있습니다.
    </div>
  );

  const [visible, setVisible] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      {/* 랩실 설명을 꾸며주는 기능 */}
      <Grid container marginLeft="20%">
        <Grid
          item
          sx={{
            px: 30,
            width: "70%",
            height: 0,
          }}
        >
          <Root>
            <Divider />
            <Typography fontSize="1vw">{content}</Typography>
            <Divider />
          </Root>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          width: "100%",
          height: 200,
          marginLeft: "50%",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* 연구분야 버튼 */}
        <Stack
          marginLeft="20%"
          marginTop="5%"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 1, md: 1 }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              width: "20%",
              color: "#212121",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#9fa8da",
              },
            }}
            onClick={(event) => {
              event.stopPropagation();
              setVisible(0);
            }}
          >
            기계 번역
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              width: "20%",
              color: "#212121",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#9fa8da",
              },
            }}
            onClick={() => {
              setVisible(1);
            }}
          >
            자연언어 인터페이스
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              width: "20%",
              color: "#212121",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#9fa8da",
              },
            }}
            onClick={() => {
              setVisible(2);
            }}
          >
            기계학습 & 데이터 마이닝
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              width: "20%",
              color: "#212121",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#9fa8da",
              },
            }}
            onClick={() => {
              setVisible(3);
            }}
          >
            딥러닝 뉴럴 기계번역
          </Button>
        </Stack>
        <Stack spacing={1} marginTop={1} direction="row" marginLeft="20%">
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              width: "20%",
              color: "#212121",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#9fa8da",
              },
            }}
            onClick={() => {
              setVisible(4);
            }}
          >
            뉴로 심볼릭
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              width: "20%",
              color: "#212121",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#9fa8da",
              },
            }}
            onClick={() => {
              setVisible(5);
            }}
          >
            빈칸
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              width: "20%",
              color: "#212121",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#9fa8da",
              },
            }}
            onClick={() => {
              setVisible(6);
            }}
          >
            빈칸
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              width: "20%",
              color: "#212121",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#9fa8da",
              },
            }}
            onClick={() => {
              setVisible(7);
            }}
          >
            빈칸
          </Button>
        </Stack>
      </Grid>

      {/* 버튼마다 다른 컴포넌트 나오게 하였음 */}
      {visible === 0 ? <FieldTrans /> : null}
      {visible === 1 ? <FieldNLP /> : null}
      {visible === 2 ? <FieldML /> : null}
      {visible === 3 ? <FieldDL /> : null}
      {visible === 4 ? <FieldNS /> : null}
    </ThemeProvider>
  );
}
