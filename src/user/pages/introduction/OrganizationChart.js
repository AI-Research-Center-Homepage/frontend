import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";

import chart from "../../../assets/images/chart.png";

import { Card, CardMedia, CssBaseline } from "@mui/material";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-04-25
 *@description 조직도 Page
 *             조직도를 이미지로 출력함
 */

const OrganizationChart = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <SubHeader main="소개" sub="조직도" />

      {/* 이미지 출력부 */}
      <Card sx={{ boxShadow: 0 }}>
        <CardMedia component="img" image={chart} />
      </Card>

      <Footer />
    </>
  );
};

export default OrganizationChart;
