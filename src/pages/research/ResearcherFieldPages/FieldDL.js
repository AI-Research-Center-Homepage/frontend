import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import '../Field.scss';

// 연구분야-딥러닝 컴포넌트
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
        딥러닝 뉴럴 기계번역
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
          인코더 – 디코더 아키텍처를 사용하는 반복 신경망을 기반으로 한다.
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
        일련의 단어의 가능성을 예측하기 위해 인공 신경망을 사용하는 기계 번역
        접근 방법으로, 일반적으로 하나의 통합 모델에 문장들 전체를 모델링한다.
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
