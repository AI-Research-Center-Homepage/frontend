import React, { useState } from 'react';
import {
  Button,
  Grid,
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

const FieldName = [
  { id: 0, title: '기계번역' },
  { id: 1, title: '자연언어 인터페이스' },
  { id: 2, title: '기계학습 & 데이터마이닝' },
  { id: 3, title: '딥러닝 뉴럴 기계번역' },
  { id: 4, title: '뉴로 심볼릭' },
  { id: 5, title: '빈칸' },
  { id: 6, title: '빈칸' },
  { id: 7, title: '빈칸' },
];

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-05-16
 *@description 연구분야 페이지
 */
export default function ResearchField() {
  //    랩실 설명
  const content = (
    <div style={{ textAlign: 'center' }}>
      <span style={{ color: '#0288d1' }}>
        <strong>학습, 추론, 자연언어</strong>
      </span>
      를 이해할 수 있는 새로운 계산 시스템인
      <br />
      <span style={{ color: '#0288d1' }}>
        <strong>인지 컴퓨팅 시스템 연구</strong>
      </span>
      를 수행하고 있습니다.
    </div>
  );

  const [visible, setVisible] = useState(0);

  function FieldPrint({ title, id }) {
    return (
      <Button
        variant="contained"
        sx={{
          borderRadius: 0,
          width: '100%',
          color: '#212121',
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: '#0288d1',
            transition: '1s',
          },
        }}
        onClick={() => {
          setVisible(id);
        }}
      >
        {title}
      </Button>
    );
  }

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
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5%',
            marginBottom: '5%',
            width: '100%',
            height: { xs: 300, md: 200 },
            backgroundColor: '#f9f9f9',
          }}
        >
          <Grid
            container
            sx={{
              width: { md: '80%', xs: '90%' },
            }}
          >
            {FieldName.map((list) => (
              <Grid item md={3} xs={6} marginBottom={0.5}>
                <FieldPrint title={list.title} id={list.id}></FieldPrint>
              </Grid>
            ))}
          </Grid>
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
