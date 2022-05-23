import React from 'react';
import { Box, Typography } from '@mui/material';
import '../Field.scss';

// 프로젝트-기계번역 인터페이스 컴포넌트
export default function ProjectMT() {
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
        기계번역
      </Typography>
      {/* 부제목 */}
      <Typography variant="h6" fontWeight="bold" align="center" paddingTop="1%">
        <span className="light">기계번역의 부제목..</span>
      </Typography>
      {/* 설명 */}
      <Typography
        variant="body2"
        color="#757575"
        align="center"
        paddingTop="2%"
        paddingBottom="10%"
      >
        인간이 사용하는 자연 언어를 컴퓨터를 사용하여 다른 언어로 번역한다.{' '}
        <br></br>최근 딥러닝 알고리즘을 통해 수준 높은 기계번역을 할 수 있게
        되었다. <br></br>연구실에서 무슨 프로젝트를 어떻게 하고있고 어쩌구
      </Typography>
    </Box>
  );
}
