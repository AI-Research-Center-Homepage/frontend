import React, { useState } from 'react';
import {
  Button,
  Stack,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import FieldTrans from './ResearcherFieldPages/FieldTrans';
import FieldNLP from './ResearcherFieldPages/FieldNLP';
import FieldML from './ResearcherFieldPages/FieldML';
import FieldDL from './ResearcherFieldPages/FieldDL';
import FieldNS from './ResearcherFieldPages/FieldNS';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
      danger: '#ff0000',
    },
    secondary: {
      main: '#d1d1d1',
    },
    neutral: {
      main: '#f9f9f9',
    },
  },
});

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-05-16
 *@description 연구분야 페이지
 */
export default function ResearchField() {
  //    랩실 설명
  const content = (
    <div style={{ textAlign: 'center' }}>
      <span style={{ color: '#9fa8da' }}>
        <strong>학습, 추론, 자연언어</strong>
      </span>
      를 이해할 수 있는 새로운 계산 시스템인
      <br />
      <span style={{ color: '#9fa8da' }}>
        <strong>인지 컴퓨팅 시스템 연구</strong>
      </span>
      를 수행하고 있습니다.
    </div>
  );

  const [visible, setVisible] = useState(0);

  return (
    <div>
      <Header />
      <SubHeader main="연구" sub="AI연구분야" />
      <ThemeProvider theme={theme}>
        {/* 랩실 설명을 꾸며주는 기능 */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              p: 2,
              m: 2,
              borderBottom: 1,
              borderTop: 1,
              borderColor: '#bdbdbd',
              width: '40%',
            }}
          >
            <Typography>{content}</Typography>
          </Box>
        </div>

        <Box
          sx={{
            marginTop: '5%',
            marginBottom: '5%',
            width: '100%',
            height: 200,
            backgroundColor: '#f9f9f9',
          }}
        >
          {/* 연구분야 버튼 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Stack
              marginTop="3%"
              direction="row"
              spacing={1}
              width={{ xs: '40%', md: '80%' }}
              justifyContent="center"
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: 0,
                  width: '20%',
                  color: '#212121',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#9fa8da',
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
                  width: '20%',
                  color: '#212121',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#9fa8da',
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
                  width: '20%',
                  color: '#212121',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#9fa8da',
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
                  width: '20%',
                  color: '#212121',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#9fa8da',
                  },
                }}
                onClick={() => {
                  setVisible(3);
                }}
              >
                딥러닝 뉴럴 기계번역
              </Button>
            </Stack>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Stack
              spacing={1}
              marginTop={1}
              direction="row"
              width={{ xs: '40%', md: '80%' }}
              justifyContent="center"
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: 0,
                  width: '20%',
                  color: '#212121',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#9fa8da',
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
                  width: '20%',
                  color: '#212121',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#9fa8da',
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
                  width: '20%',
                  color: '#212121',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#9fa8da',
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
                  width: '20%',
                  color: '#212121',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#9fa8da',
                  },
                }}
                onClick={() => {
                  setVisible(7);
                }}
              >
                빈칸
              </Button>
            </Stack>
          </div>
        </Box>

        {/* 버튼마다 다른 컴포넌트 나오게 하였음 */}
        {visible === 0 ? <FieldTrans /> : null}
        {visible === 1 ? <FieldNLP /> : null}
        {visible === 2 ? <FieldML /> : null}
        {visible === 3 ? <FieldDL /> : null}
        {visible === 4 ? <FieldNS /> : null}
      </ThemeProvider>
      <Footer />
    </div>
  );
}
