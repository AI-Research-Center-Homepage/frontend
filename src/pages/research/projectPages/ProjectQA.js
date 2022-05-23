import React from 'react';
import { Box, Typography } from '@mui/material';
import '../Field.scss';

// 프로젝트-질의 응답 인터페이스 컴포넌트
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
        질의응답
      </Typography>
      {/* 부제목 */}
      <Typography variant="h6" fontWeight="bold" align="center" paddingTop="1%">
        <span className="light">질의응답의 부제목..</span>
      </Typography>
      {/* 설명 */}
      <Typography
        variant="body2"
        color="#757575"
        align="center"
        paddingTop="2%"
        paddingBottom="10%"
      >
        사용자의 질의에 대한 답변이 될 수 있는 정답을 문서 집합내에서 탐색하여
        사용자에게 제시해주는 시스템이다.
        <br></br>일반적으로 질의응답 시스템은 사용자의 질의에 관련된 문서를
        검색하는 후보검색 단계 (candidate retrieval phase) 와 검색된 문서 내에서
        정답을 생성하는 정답추출 단계 (answer extraction phase) 로 구성된다.
        <br></br>연구실에서 무슨 프로젝트를 어떻게 하고있고 어쩌구
      </Typography>
    </Box>
  );
}
