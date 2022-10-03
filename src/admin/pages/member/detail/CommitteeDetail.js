import { TextField, Button, Grid } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { changeMainHeaderContext } from "../../../AdminMain";
import MemberNew from "../../../components/MemberNew";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-09-17
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
    adminDto: {
      loginId: "",
      password: "",
    },
  });

  const getMember = async () => {
    try {
      const response = await axios.get(`/api/admin/members/${id}`);
      console.log(response.data);
      setMember(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Mock서버 한계로 학사는 Mock서버에 등록해놓지 않음
  // 단 교수와 구현은 동일하다
  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("구성원 > 운영위원회 > 상세정보");
      getMember();
    } else {
      navigate("/admin/login");
    }
  }, []);

  return (
    <MemberNew memberData={member} memberType="committee" isDetailPage={true} />
  );
};

export default CommitteeDetail;
