import React, { useEffect, useState } from 'react';
import { Button, Grid, Box, Typography } from '@mui/material';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import './Field.scss';

//임시 사진 경로
const imgUrl =
  'https://images.unsplash.com/photo-1645148100502-418e89bf99c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjEwNzU1Mw&ixlib=rb-1.2.1&q=80&w=1080';

// 버튼 클릭시 나오는 화면에 대한 정보
const FieldName = [
  {
    id: 0,
    engTitle: 'trans',
    title: '기계번역',
    subtitle: '한 언어에서 다른 언어로 텍스트 또는 음성 자동 번역',
    desc: '통계방식의 기계번역이 도입된 이후, 언어 데이터를 다루는 검색 엔진 기업 등의 글로벌 IT 기업들이 기계 번역 개발에 뛰어들 수 있게 됐다. <br /> 최근에는 규칙기반 기계번역도 통계기반 기술을 함께 사용하는 하이브리드 방식으로 진화 중이다.',
    image: { imgUrl },
  },
  {
    id: 1,
    engTitle: 'natural',
    title: '자연언어 인터페이스',
    subtitle: '지능형 개인 비서',
    desc: '자연어 사용자 인터페이스를 사용하여 질문에 답변하고, 권장 사항을 제시하며, 요청을 웹 서비스 집합에 위임하여 작업을 수행한다.',
    // image: { img },
  },
  {
    id: 2,
    engTitle: 'machine',
    title: '기계학습 & 데이터마이닝',
    subtitle: '데이터를 학습하고 예측할 수 있는 알고리즘의 구성과 연구를 탐구',
    desc: '컴퓨터가 학습할 수 있도록 하는 알고리즘과 기술을 개발하고 통계적 규칙이나 패턴을 분석하여 가치있는 정보를 추출한다.',
    // image: { img },
  },
  {
    id: 3,
    engTitle: 'deepLearning',
    title: '딥러닝 뉴럴 기계번역',
    subtitle:
      '인코더 – 디코더 아키텍처를 사용하는 반복 신경망을 기반으로 한다.',
    desc: '일련의 단어의 가능성을 예측하기 위해 인공 신경망을 사용하는 기계 번역 접근 방법으로, 일반적으로 하나의 통합 모델에 문장들 전체를 모델링한다.',
    // image: { img },
  },
  {
    id: 4,
    engTitle: 'neuro',
    title: '뉴로 심볼릭',
    subtitle: '기계 학습기반 인공지능의 한계를 해결하는 기술이다.',
    desc: ' 비교적 소규모의 데이터로 학습해 대상의 속성을 도출한 다음 사람이 제공한 규칙에 근거해 답을 찾아 나간다. 단계별로 기계 학습 방식과 전문가 방식을 적절하게 결합해 사용한다.',
    // image: { img },
  },
  {
    id: 5,
    engTitle: 'first_null',
    title: '빈칸',
    subtitle: '내용없음',
    desc: '내용없음',
    // image: { img },
  },
  {
    id: 6,
    engTitle: 'secont_null',
    title: '빈칸',
    subtitle: '내용없음',
    desc: '내용없음',
    // image: { img },
  },
  {
    id: 7,
    engTitle: 'third_null',
    title: '빈칸',
    subtitle: '내용없음',
    desc: '내용없음',
    // image: { img },
  },
];

//selectComponent에서 데이터를 받아와 각 화면을 보여줌
function Description(props) {
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
        {props.title}
      </Typography>
      {/* 부제목 */}
      <Typography variant="h6" fontWeight="bold" align="center" paddingTop="3%">
        <span className="light">{props.subtitle}</span>
      </Typography>
      {/* 설명 */}
      <Typography
        variant="body2"
        color="#757575"
        align="center"
        paddingTop="2%"
        style={{ opacity: (position - position / 1.8) / 100 }}
      >
        {props.desc}
      </Typography>
      {/* 사진 */}
      <img
        alt="nature"
        src={props.image}
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

/**
 **@author Eunyoung-Jo, czen2@jbnu.ac.kr
 *@date 2022-05-29
 *@description 연구분야 페이지
 */
export default function ResearchField() {
  //랩실 설명
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

  const [contents, setContents] = useState('trans');

  //클릭한 버튼의 name값을 state에 저장
  const buttonValueSetting = (e) => {
    const { name } = e.target;
    setContents(name);
  };

  //name값에 따라 다른 화면 출력
  const selectComponent = {
    trans: (
      <Description
        title={FieldName[0].title}
        subtitle={FieldName[0].subtitle}
        desc={FieldName[0].desc}
        image={imgUrl}
      />
    ),
    natural: (
      <Description
        title={FieldName[1].title}
        subtitle={FieldName[1].subtitle}
        desc={FieldName[1].desc}
        image={imgUrl}
      />
    ),
    machine: (
      <Description
        title={FieldName[2].title}
        subtitle={FieldName[2].subtitle}
        desc={FieldName[2].desc}
        image={imgUrl}
      />
    ),
    deepLearning: (
      <Description
        title={FieldName[3].title}
        subtitle={FieldName[3].subtitle}
        desc={FieldName[3].desc}
        image={imgUrl}
      />
    ),
    neuro: (
      <Description
        title={FieldName[4].title}
        subtitle={FieldName[4].subtitle}
        desc={FieldName[4].desc}
        image={imgUrl}
      />
    ),
    first_null: (
      <Description
        title={FieldName[5].title}
        subtitle={FieldName[5].subtitle}
        desc={FieldName[5].desc}
        image={imgUrl}
      />
    ),
    second_null: (
      <Description
        title={FieldName[6].title}
        subtitle={FieldName[6].subtitle}
        desc={FieldName[6].desc}
        image={imgUrl}
      />
    ),
    third_null: (
      <Description
        title={FieldName[7].title}
        subtitle={FieldName[7].subtitle}
        desc={FieldName[7].desc}
        image={imgUrl}
      />
    ),
  };

  //버튼 함수
  function FieldPrint({ title, id, engTitle }) {
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
            color: '#fafafc',
            transition: '0.5s',
          },
        }}
        onClick={buttonValueSetting}
        key={id}
        name={engTitle}
      >
        <Typography
          sx={{
            fontSize: '1.2vw',
          }}
        >
          {title}
        </Typography>
      </Button>
    );
  }

  return (
    <div>
      <Header />
      <SubHeader main="연구" sub="AI연구분야" />
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
        {/* 버튼함수인 FieldPrint를 호출하여 버튼8개를 만듦 */}
        <Grid
          container
          sx={{
            width: { md: '80%', xs: '90%' },
          }}
        >
          {FieldName.map((list) => (
            <Grid item md={3} xs={6} marginBottom={0.5}>
              <FieldPrint
                title={list.title}
                id={list.id}
                engTitle={list.engTitle}
              ></FieldPrint>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 버튼마다 다른 컴포넌트 나오게 하였음 */}
      {contents && selectComponent[contents]}
      <Footer />
    </div>
  );
}
