import { TextField, Button, Box } from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import GeneralButton from "./GeneralButton";

/**
 *@author LimEunSang, dmstkd2905@naver.com
 *@date 2022-10-04
 *@description 멤버 등록하기, 자세히 보기 페이지 양식
 */

const MemberRegisterForm = ({ memberData, memberType, pageType }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 멤버 정보 관리 객체
  const [member, setMember] = useState({
    name: "",
    major: "",
    email: "",
    image: "https://source.unsplash.com/random",
    loginDto: {
      loginId: "",
      loginPw: "",
      deleted: false,
    },
  });

  /* 공통 속성 change handler */
  const nameChange = (event) => {
    setMember({
      ...member,
      name: event.target.value,
    });
  };

  const majorChange = (event) => {
    setMember({
      ...member,
      major: event.target.value,
    });
  };

  const emailChange = (event) => {
    setMember({
      ...member,
      email: event.target.value,
    });
  };

  // (전체 멤버가 가지고 있어야 하는 속성이지만 개발 미흡으로 현재 professor만 가짐)
  const locationChange = (event) => {
    setMember({
      ...member,
      location: event.target.value,
    });
  };

  const imgChange = (event) => {
    setMember({
      ...member,
      image: event.target.value,
    });
  };

  const IDChange = (event) => {
    setMember((cur) => {
      let newID = { ...cur };
      newID.loginDto.loginId = event.target.value;
      return newID;
    });
  };

  const passwordChange = (event) => {
    setMember((cur) => {
      let newPassword = { ...cur };
      newPassword.loginDto.loginPw = event.target.value;
      return newPassword;
    });
  };

  /* 개별 속성 change handler */

  // professor
  const doctorateChange = (event) => {
    setMember({
      ...member,
      doctorate: event.target.value,
    });
  };

  // professor
  const numberChange = (event) => {
    setMember({
      ...member,
      number: event.target.value,
    });
  };

  // graduate, undergraduate
  const admissionChange = (event) => {
    setMember({
      ...member,
      admission: event.target.value,
    });
  };

  // committee
  const positionChange = (event) => {
    setMember({
      ...member,
      position: event.target.value,
    });
  };

  /* 멤버 등록, 수정, 삭제 기능 */

  // member 정보 등록 요청 함수
  const postMember = async () => {
    try {
      const response = await axios.post(
        `/api/admin/members/${memberType}/new`,
        member
      );
    } catch (error) {
      console.log(error);
    }
  };

  // member 정보 수정 요청 함수
  const putMember = async () => {
    try {
      const response = await axios.put(`/api/admin/members/${id}`, member);
    } catch (error) {
      console.log(error);
    }
  };

  // member 정보 탈퇴 요청 함수
  const deleteMember = async () => {
    try {
      const response = await axios.delete(`/api/admin/members/?memberId=${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // 등록 버튼 핸들러
  const handleRegisterButton = () => {
    postMember();
  };

  // 수정 버튼 핸들러
  const handleModifyButton = () => {
    putMember();
  };

  // 탈퇴 버튼 핸들러
  const handleWithdrawalButton = () => {
    deleteMember();
  };

  // mount
  useEffect(() => {
    setMember(memberData);
  }, []);

  return (
    <Box sx={{ py: "3%", px: "7.5%" }}>
      <TextField
        sx={{ width: "100%", marginTop: 1 }}
        label="이름"
        multiline
        maxRows={4}
        onChange={nameChange}
        value={member.name}
      />

      <TextField
        sx={{ width: "100%", marginTop: 1 }}
        label="전공"
        multiline
        maxRows={4}
        onChange={majorChange}
        value={member.major}
      />

      <TextField
        sx={{ width: "100%", marginTop: 1 }}
        label="이메일"
        multiline
        maxRows={4}
        onChange={emailChange}
        value={member.email}
      />

      <TextField
        disabled
        sx={{ width: "100%", marginTop: 1 }}
        label="이미지"
        multiline
        maxRows={4}
        InputProps={{
          endAdornment: (
            <Button variant="contained" size="small">
              업로드
            </Button>
          ),
        }}
        value={member.img}
      />

      {memberType === "professor" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="학위"
          multiline
          maxRows={4}
          onChange={doctorateChange}
          value={member.doctorate}
        />
      )}

      {memberType === "professor" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="위치"
          multiline
          maxRows={4}
          onChange={locationChange}
          value={member.location}
        />
      )}

      {memberType === "professor" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="전화번호"
          multiline
          maxRows={4}
          onChange={numberChange}
          value={member.number}
        />
      )}

      {(memberType === "graduate" || memberType === "undergraduate") && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="입학년도"
          multiline
          maxRows={4}
          onChange={admissionChange}
          value={member.admission}
        />
      )}

      {memberType === "committee" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="직책"
          multiline
          maxRows={4}
          onChange={positionChange}
          value={member.position}
        />
      )}

      <TextField
        sx={{ width: "100%", marginTop: 1 }}
        label="아이디"
        multiline
        maxRows={4}
        onChange={IDChange}
        value={member.loginDto.loginId}
      />

      <TextField
        sx={{ width: "100%", marginTop: 1 }}
        label="패스워드"
        multiline
        maxRows={4}
        onChange={passwordChange}
        value={member.loginDto.loginPw}
      />

      <Box sx={{ display: "flex", my: "2%", justifyContent: "flex-end" }}>
        {pageType === "new" && (
          <>
            <GeneralButton
              content="취소하기"
              onClick={() => navigate("./../")}
              sx={{ mr: "1%" }}
            />
            <GeneralButton content="등록하기" onClick={handleRegisterButton} />
          </>
        )}

        {pageType === "detail" && (
          <>
            <GeneralButton
              content="취소하기"
              onClick={() => navigate("./../")}
            />
            <GeneralButton
              content="탈퇴하기"
              onClick={handleWithdrawalButton}
              sx={{ mx: "1%" }}
            />
            <GeneralButton content="수정하기" onClick={handleModifyButton} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default MemberRegisterForm;
