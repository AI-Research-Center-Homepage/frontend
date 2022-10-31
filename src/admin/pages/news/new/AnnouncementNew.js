import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeMainHeaderContext } from "../../../AdminMain";
import PostRegisterForm from "../../../components/PostRegisterForm";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-10-31
 *@description 공지사항 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const AnnouncementNew = () => {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const post = {
    boardName: "Notice",
    title: "",
    content: "",
    author: "관리자",
    imageList: [],
    attaches: [],
  };

  /* useEffect */
  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 공지사항 > 신규등록");
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return <PostRegisterForm postData={post} postType="notice" pageType="new" />;
};

export default AnnouncementNew;
