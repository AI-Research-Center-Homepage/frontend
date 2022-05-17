import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import '../Field.scss';

// 연구분야-머신러닝 컴포넌트
export default function FieldTrans() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }; //컴포넌트가 언마운트되기 직전에 이벤트 제거
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        // backgroundColor: "#f9f9f9"
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
        기계학습과 데이터 마이닝
      </Typography>
      {/* 부제목 */}
      <Typography
        variant="h6"
        fontWeight="bold"
        align="center"
        paddingTop="3%"
        // style={{ opacity: (position - 200) / 100 }}
      >
        <span className="light">
          데이터를 학습하고 예측할 수 있는 알고리즘의 구성과 연구를 탐구
        </span>
      </Typography>
      {/* 설명 */}
      <Typography
        variant="body2"
        color="#757575"
        align="center"
        paddingTop="2%"
        style={{ opacity: (position - position / 1.8) / 100 }}
      >
        컴퓨터가 학습할 수 있도록 하는 알고리즘과 기술을 개발하고 통계적
        규칙이나 패턴을 분석하여 가치있는 정보를 추출한다.
      </Typography>
      {/* 사진 */}
      <img
        alt="nature"
        src="https://images.unsplash.com/photo-1645148100502-418e89bf99c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjEwNzU1Mw&ixlib=rb-1.2.1&q=80&w=1080"
        style={{
          height: '30vw',
          marginLeft: '70%',
          marginTop: '2%',
          opacity: (position - position / 1.3) / 100,
        }}
      ></img>
    </Box>
  );
}
