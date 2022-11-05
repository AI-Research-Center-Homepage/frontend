import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
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
  const { id } = useParams();
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const [post, setPost] = useState({
    boardName: "Notice",
    title: "",
    content: "",
    author: "관리자",
    imageList: [],
    attaches: [],
  });

  // API 통신 완료 후 받아온 데이터를 저장한 객체를 prop 으로 전달하기 위해 선언한 객체
  // 없으면 결과적으로 post 객체에 데이터가 없는 상태로 화면에 출력됨
  const [isSetPost, setIsSetPost] = useState(false);

  const getPost = async () => {
    try {
      const response = await axios.get(`/api/admin/posts/?id=${id}`);
      setPost(response.data); // <- 동작 안 함
      console.log(response.data);
      setIsSetPost(true);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  /* useEffect */
  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("소식 > 공지사항 > 상세정보");
      getPost();
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    isSetPost && (
      <PostRegisterForm
        postData={post}
        postType="announcement"
        pageType="detail"
      />
    )
  );
};

export default AnnouncementDetail;
