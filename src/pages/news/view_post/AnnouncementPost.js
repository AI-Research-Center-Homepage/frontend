import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SubHeader from "../../../components/SubHeader";
import NewsPost from "../../../components/NewsPost";

// dummy post
const post = {
  title: "2022 서울대학교 AI연구원 산학협력센터 행정원 채용 공고",
  content: "**내용** ~~~",
  viewNum: 3,
  createdDate: "2019-12-14T07:51:01",
  modifiedDate: "2019-12-15T07:51:01",
  attach: [
    {
      fileName:
        "제출서류 양식이력서, 자기소개서, 개인정보수집동의서 각 1부.hwp",
      filePath: "",
    },
    {
      fileName: "2022 LMS 폭력예방교육 가이드(5.23.).pdf",
      filePath: "",
    },
  ],
};

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-06-04
 *@description 공지사항 자세히 보기 페이지 구현
 */

const AnnouncementPost = () => {
  // 게시물 id를 url로부터 저장
  const { id } = useParams();
  // 이후에 id에 해당하는 게시물 데이터를 요청하도록 코드 작성

  return (
    <div>
      <Header />
      <SubHeader main="소식" sub="공지사항" />
      <NewsPost post={post} />
      <Footer />
    </div>
  );
};

export default AnnouncementPost;
