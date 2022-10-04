import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { changeMainHeaderContext } from "../../../AdminMain";
import MemberRegisterForm from "../../../components/MemberRegisterForm";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-10-04
 *@description 운영위원회 상세보기 페이지
 *             useParams로 id값을 받아와 그 값으로 다시 데이터 요청
 *             CommitteeNew와 다르게 전달받은 데이터를 미리 보여줌
 */

const CommitteeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const [member, setMember] = useState({
    name: "",
    major: "",
    email: "",
    image: "",
    position: "",
    loginDto: {
      loginId: "",
      loginPw: "",
    },
  });

  // API 통신 완료 후 받아온 데이터를 저장한 객체를 prop 으로 전달하기 위해 선언한 객체
  // 없으면 결과적으로 member 객체에 데이터가 없는 상태로 화면에 출력됨
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
      changeMainText("구성원 > 운영위원회 > 상세정보");
      getMember();
    } else {
      navigate("/admin/login");
    }
  }, []);

  return (
    // isSetMember && <MemberDetail memberData={member} memberType="committee" />
    isSetMember && (
      <MemberRegisterForm
        memberData={member}
        memberType="committee"
        pageType="detail"
      />
    )
  );
};

export default CommitteeDetail;
