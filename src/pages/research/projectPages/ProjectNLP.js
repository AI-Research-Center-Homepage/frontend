import React from 'react';
import { Box, Typography } from '@mui/material';
import '../Field.scss';

// 프로젝트-자연어 처리 인터페이스 컴포넌트
export default function ProjectNLP() {
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
        자연어 처리
      </Typography>
      {/* 부제목 */}
      <Typography variant="h6" fontWeight="bold" align="center" paddingTop="1%">
        <span className="light">자연어 처리의 부제목..</span>
      </Typography>
      {/* 설명 */}
      <Typography
        variant="body2"
        color="#757575"
        align="center"
        paddingTop="2%"
        paddingBottom="10%"
      >
        인간의 언어 현상을 컴퓨터와 같은 기계를 이용해서 묘사할 수 있도록
        연구하고 이를 구현한다. <br></br>NLP에는 인간의 의사 소통 방식과
        컴퓨터의.이해력의 간극을 메우기 위해 컴퓨터 과학이나 전산 언어학 등 많은
        분야가 동원된다. <br></br>무슨 프로젝트를 어떻게 하고있고 어쩌구
      </Typography>
    </Box>
  );
}
