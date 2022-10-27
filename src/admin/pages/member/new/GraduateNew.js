import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeMainHeaderContext } from "../../../AdminMain";
import MemberRegisterForm from "../../../components/MemberRegisterForm";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-10-03
 *@description 석사 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const GraduateNew = () => {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const member = {
    name: "",
    major: "",
    email: "",
    image: "https://source.unsplash.com/random",
    admission: "",
    loginDto: {
      loginId: "",
      loginPw: "",
      deleted: false,
    },
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("구성원 > 석사 > 신규등록");
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    <MemberRegisterForm
      memberData={member}
      memberType="graduate"
      pageType="new"
    />
  );
};

export default GraduateNew;
