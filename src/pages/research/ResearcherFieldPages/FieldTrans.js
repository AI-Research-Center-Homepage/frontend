import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import '../Field.scss';

// 연구분야-기계번역 컴포넌트
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
        기계번역 (Machine Translation)
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
          한 언어에서 다른 언어로 텍스트 또는 음성 자동 번역
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
        통계방식의 기계번역이 도입된 이후, 언어 데이터를 다루는 검색 엔진 기업
        등의 글로벌 IT 기업들이 기계 번역 개발에 뛰어들 수 있게 됐다. <br />
        최근에는 규칙기반 기계번역도 통계기반 기술을 함께 사용하는 하이브리드
        방식으로 진화 중이다.
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
