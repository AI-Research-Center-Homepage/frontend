import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";

import * as React from "react";
import PropTypes from "prop-types";

// import 7개까지 각 한줄로 분리 가능
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { Login } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

import PannelPost from "../../components/PannelPost";
import Pannel from "../../components/Pannel";

// 적용된 논문 데이터
// {
// 	"ML": {
// 		"thesis": [{
// 				"id": 1,
// 				"field": "ML",
// 				"title": "Frustratingly Easy System Combination for Grammatical Error Correction",
// 				"enName": [
//                     "Seung-Hoon Na",
//                     "Seonhoon Kim"
//                 ],
// 				"koName": [
//                     "나승훈",
//                     "김선훈"
//                 ],
// 				"journal": "NAACL",
// 				"PublishDate": 20220202,
// 				"url": "www.naver.com"
// 			},
// 			{
// 				"id": 2,
// 				"field": "ML",
// 				"title": "LM-BFF-MS: Improving Few-Shot Fine-tuning of Language Models based on Multiple Soft Demonstration Memory",
// 				"enName": [
//                     "Donghyeon Jeon",
//                     "Inho Kang"
//                 ],
// 				"koName": [
//                     "전동현",
//                     "강인호"
//                 ],
// 				"journal": "ACL",
// 				"PublishDate": 20220202,
// 				"url": "www.naver.com"
// 			}
// 		]
// 	},
// 	"Vision": {
// 		"thesis": [{
// 				"id": 3,
// 				"field": "Vision",
// 				"title": "Impact of Sentence Representation Matching in Neural Machine Translation",
// 				"enName": [
//                     "Kangil Kim",
//                     "Sangkeun Jung"
//                 ],
// 				"koName": [
//                     "김강일",
//                     "정상근"
//                 ],
// 				"journal": "Applied Sciences",
// 				"PublishDate": 20220202,
// 				"url": "www.naver.com"
// 			},
// 			{
// 				"id": 4,
// 				"field": "Vision",
// 				"title": "A Comparison of Speech Features between Mild Cognitive Impairment and Healthy Aging Groups",
// 				"enName": [
//                     "Ko Woon Kim",
//                     "Sangin Woo"
//                 ],
// 				"koName": [
//                     "김고운",
//                     "우상인"
//                 ],
// 				"journal": "Dementia and Neurocognitive Disorder",
// 				"PublishDate": 20220202,
// 				"url": "www.naver.com"
// 			}
// 		]
// 	}
// }

/*
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-05
 *@name TabPanel
 *@description
 *    - hidden 속성 사용, value와 index 비교
 *    - WAI-ARIA의 aria-labelledby를 사용해 id 값을 통한 접근
 *    - TabPanel -> Tab menu 연결
 */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      /* 
      hidden 속성에서 props의 value값과 index값 일치하면 false를 반환해 보임
      다르면 true를 반환하여 보이지 않음  
      */
      id={`action-tabpanel-${index}`}
      // Tab menu 안의 a11yProps에서 참조
      aria-labelledby={`action-tab-${index}`}
      /*
      - 레이블 제공을 위한 aria-속성
      - label이 아니라 labelledby를 사용한 이유는 
        TabPannel 안에 설명 가능한 텍스트가 있기 때문
      - aria-labelledby은 hidden으로 숨겨진 요소 참조 가능 (주요 기능)
      - 상태 값은 연결시킬 레이블 id를 입력한다.
        TabPannel에서 Tab menu로 연결
        73line에서 Tab menu 안의 a11yProps의 id 
        id: `action-tab-${index}` 형태를 따름
      */
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      {/* state의 value 값이 변할 때 TabPanel의 value 값도 index에 맞춰 변환 */}
    </Typography>
  );
}

// index와 value 값 비교가 필수이기에 require 처리
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

/*
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-05
 *@name a11yProps
 *@description
 *    - Tab menu list에 포함되는 속성
 *    - 반복적으로 들어가는 index 값인 id와
 *      aria-controls를 관리하고 확장에 용이하게 함
 *    - Tab menu -> Tab Pannel 연결
 */
function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    // TabPannel에서 참조
    "aria-controls": `action-tabpanel-${index}`,
    /*
    - aria-controls은 현재 요소가 제어하는 대상을 명시하는 속성으로 탭메뉴와 본문을 연결
    - 상태 값은 tabpanel의 id명 입력
      33 line에서 Tabpannel 함수의 id는 id={`action-tabpanel-${index}`}
      동일하게 aria-controls도 형태를 맞춰줌
    */
  };
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [theses, setTheses] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/list/thesis3"
      )
      .then((response) => {
        setTheses(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <SubHeader main="연구" sub="논문" />

      <Box
        sx={{
          bgcolor: "background.paper",
          width: "auto",
          position: "relative",
          minHeight: 200,
          mt: 10,
          mx: 5,
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="머신러닝" {...a11yProps(0)} />
            <Tab label="컴퓨터 비전" {...a11yProps(1)} />
            <Tab label="데이터 지능" {...a11yProps(2)} />
            <Tab label="언어.음성" {...a11yProps(3)} />
            <Tab label="로봇" {...a11yProps(4)} />
            <Tab label="플랫폼" {...a11yProps(5)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          {theses.ML?.thesis.map((post) => (
            <Pannel post={post} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {theses.Vision?.thesis.map((post) => (
            <Pannel post={post} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {theses.DataIntelli?.thesis.map((post) => (
            <PannelPost post={post} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          EMNLP 2021 (자연어처리에서의 경험적 방법론 학회)
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          ICRA 2021 (IEEE 로봇과 자동화 국제대회)
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          FAST 2021 (USENIX 파일저장기술학회)
        </TabPanel>
      </Box>

      <Footer />
    </div>
  );
}
