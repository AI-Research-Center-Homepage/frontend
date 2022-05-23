import React, { useState } from 'react';
import { Button, Grid, Box } from '@mui/material';
import ProjectMT from './projectPages/ProjectMT';
import ProjectQA from './projectPages/ProjectQA';
import ProjectEB from './projectPages/ProjectEB';
import ProjectNLP from './projectPages/ProjectNLP';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';

// map함수에 사용되는 버튼 정보
const FieldName = [
  { id: 0, title: '기계번역' },
  { id: 1, title: '질의응답' },
  { id: 2, title: '엑소 브레인' },
  { id: 3, title: '자연어 처리' },
  { id: 4, title: '빈칸' },
  { id: 5, title: '빈칸' },
  { id: 6, title: '빈칸' },
  { id: 7, title: '빈칸' },
];

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-05-23
 *@description 프로젝트 페이지
 */
export default function ResearchField() {
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
      <SubHeader main="연구" sub="연구 프로젝트" />

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
        {/* 버튼 8개 */}
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
      {visible === 0 ? <ProjectMT /> : null}
      {visible === 1 ? <ProjectQA /> : null}
      {visible === 2 ? <ProjectEB /> : null}
      {visible === 3 ? <ProjectNLP /> : null}

      <Footer />
    </div>
  );
}
