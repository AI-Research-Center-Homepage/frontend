import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeMainHeaderContext } from "../../../AdminMain";
import PostRegisterForm from "../../../components/PostRegisterForm";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-10-31
 *@description 공지사항 자세히보기 페이지
 *             DB에 저장된 게시물의 내용을 불러오고
 *             편집 모드로 전환
 */

const AnnouncementDetail = () => {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const post = {
    boardName: "Notice",
    title: "",
    content: "",
    author: "관리자",
    imageList: [],
  };

  /* useEffect */
  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 공지사항 > 상세정보");
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    <PostRegisterForm postData={post} postType="notice" pageType="detail" />
  );
};

export default AnnouncementDetail;
