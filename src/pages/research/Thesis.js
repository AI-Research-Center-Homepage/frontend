import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";

import * as React from "react";
import PropTypes from "prop-types";

import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          ICLR 2022 (표현 학습 국제학회)
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          CVPR 2022(컴퓨터 비전과 패턴인식 학회)
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          VLDB 2022 (거대 데이터 베이스 컨퍼런스)
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
