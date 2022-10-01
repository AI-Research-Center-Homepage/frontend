import * as React from "react";
import { useNavigate } from "react-router-dom";

import { CssBaseline, Grid, Container } from "@mui/material";

import FeaturedPost from "../../components/FeaturedPost";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";

import { useEffect, useState } from "react";
import axios from "axios";

/**
 *@author BeomGi-Lee jeongiun@naver.com
 *@date 2022-05-11
 *@name Post
 *@description
 *    FeaturedPost 컴포넌트 불러서 info data 화면에 뿌려주기
 */

export default function Post() {
  const navigate = useNavigate();

  const [infoData, SetInfoData] = useState({ info: [] });

  useEffect(() => {
    axios({
      method: "get",
      url: "https://4051bb99-f161-4f6e-8c33-dd389141803f.mock.pstmn.io/InfoChannelMock",
      responseType: "json",
    }).then((response) => {
      SetInfoData(response.data);
    });
  }, []);

  return (
    <div>
      <CssBaseline />
      <Header />
      <SubHeader main="소식" sub="소식통" />
      {/* 정렬 위아래 padding 너비 auto에 최대너비 고정 */}
      <Container
        sx={{
          py: 8,
          width: "auto",
        }}
        maxWidth="md"
      >
        <Grid container spacing={4}>
          {infoData.info.map((post) => (
            <FeaturedPost
              post={post}
              onClick={() => navigate(`/infochannel/${post.id}`)}
              boardName="소식통"
            />
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
