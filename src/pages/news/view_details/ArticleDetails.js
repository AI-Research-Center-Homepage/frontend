import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SubHeader from "../../../components/SubHeader";
import NewsPost from "../../../components/NewsPost";

// dummy post
const post = {
  title: "서울대, AI 맞춤형 인턴십 제도 운영 (한국대학신문)",
  content: "**내용** ~~~",
  createdDate: "2019-12-14T07:51:01",
  modifiedDate: "2019-12-15T07:51:01",
};

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-06-04
 *@description 소식통, 언론보도 자세히 보기 페이지 구현
 */

const ArticleViewDetails = () => {
  return (
    <div>
      <Header />
      <SubHeader main="소식" sub="언론보도" />
      <NewsPost post={post} />
      <Footer />
    </div>
  );
};

export default ArticleViewDetails;
