import React from 'react';
import { Box, Typography } from '@mui/material';
import '../Field.scss';

// 프로젝트-엑소브레인 인터페이스 컴포넌트
export default function ProjectQA() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
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
        엑소 브레인
      </Typography>
      {/* 부제목 */}
      <Typography variant="h6" fontWeight="bold" align="center" paddingTop="1%">
        <span className="light">엑소브레인의 부제목..</span>
      </Typography>
      {/* 설명 */}
      <Typography
        variant="body2"
        color="#757575"
        align="center"
        paddingTop="2%"
        paddingBottom="10%"
      >
        인간의 지적 노동을 보조할 수 있는 언어처리 분야의 AI 기술개발을 위해,
        전문직 종사자의 조사·분석 등의 지식노동을 보조 가능한 기술 개발 및
        국내외 표준화를 통해 핵심 IPR을 확보하는 우리나라 대표 인공지능 국가 R&D
        프로젝트이다.
        <br></br>연구실에서 무슨 프로젝트를 어떻게 하고있고 어쩌구
      </Typography>
    </Box>
  );
}
