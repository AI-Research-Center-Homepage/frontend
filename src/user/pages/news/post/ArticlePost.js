import React from "react";
import { useParams } from "react-router-dom";
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

const ArticlePost = () => {
  // 게시물 id를 url로부터 저장
  const { id } = useParams();
  // 이후에 id에 해당하는 게시물 데이터를 요청하도록 코드 작성

  return (
    <div>
      <Header />
      <SubHeader main="소식" sub="언론보도" />
      <NewsPost post={post} />
      <Footer />
    </div>
  );
};

export default ArticlePost;
