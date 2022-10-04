import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { changeMainHeaderContext } from "../../../AdminMain";
import MemberRegisterForm from "../../../components/MemberRegisterForm";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-10-04
 *@description 연구원 상세보기 페이지
 *             useParams로 id값을 받아와 그 값으로 다시 데이터 요청
 *             ResearcherNew와 다르게 전달받은 데이터를 미리 보여줌
 */

const ResearcherDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const [member, setMember] = useState({
    name: "",
    major: "",
    email: "",
    image: "",
    loginDto: {
      loginId: "",
      loginPw: "",
    },
  });

  const [isSetMember, setIsSetMember] = useState(false);

  const getMember = async () => {
    try {
      const response = await axios.get(`/api/admin/members/?memberId=${id}`);
      setMember(response.data);
      setIsSetMember(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("구성원 > 연구원 > 상세정보");
      getMember();
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    isSetMember && (
      <MemberRegisterForm
        memberData={member}
        memberType="researcher"
        pageType="detail"
      />
    )
  );
};

export default ResearcherDetail;
