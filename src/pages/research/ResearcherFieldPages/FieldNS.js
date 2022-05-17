import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import '../Field.scss';

// 연구분야-뉴로 심볼릭 컴포넌트
export default function FieldTrans() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    console.log(window.scrollY);
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
        뉴로 심볼릭
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
          기계 학습기반 인공지능의 한계를 해결하는 기술이다.
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
        비교적 소규모의 데이터로 학습해 대상의 속성을 도출한 다음 사람이 제공한
        규칙에 근거해 답을 찾아 나간다. 단계별로 기계 학습 방식과 전문가 방식을
        적절하게 결합해 사용한다.
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
