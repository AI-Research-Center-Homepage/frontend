import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <SubHeader main="소식" sub="논문" />
      <Box sx={{ width: "100%", padding: 5 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="머신러닝" {...a11yProps(0)} />
            <Tab label="컴퓨터 비전" {...a11yProps(1)} />
            <Tab label="데이터 지능" {...a11yProps(2)} />
            <Tab label="언어.음성" {...a11yProps(3)} />
            <Tab label="로봇" {...a11yProps(4)} />
            <Tab label="플랫폼" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          ICLR 2022 (표현 학습 국제학회)
        </TabPanel>
        <TabPanel value={value} index={1}>
          CVPR 2022(컴퓨터 비전과 패턴인식 학회)
        </TabPanel>
        <TabPanel value={value} index={2}>
          VLDB 2022 (거대 데이터 베이스 컨퍼런스)
        </TabPanel>
        <TabPanel value={value} index={3}>
          EMNLP 2021 (자연어처리에서의 경험적 방법론 학회)
        </TabPanel>
        <TabPanel value={value} index={4}>
          ICRA 2021 (IEEE 로봇과 자동화 국제대회)
        </TabPanel>
        <TabPanel value={value} index={5}>
          FAST 2021 (USENIX 파일저장기술학회)
        </TabPanel>
      </Box>
      <Footer />
    </div>
  );
}
