import { TextField, Button, Grid } from "@mui/material";

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { changeMainHeaderContext } from "../../../AdminMain";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-10-03
 *@description 교수 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const ProfessorNew = () => {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  // 멤버 정보 관리 객체
  const [member, setMember] = useState({
    name: "",
    major: "",
    email: "",
    image: "https://source.unsplash.com/random",
    doctorate: "",
    location: "",
    number: "",
    loginDto: {
      loginId: "",
      loginPw: "",
      deleted: false,
    },
  });

  const nameChange = (event) => {
    setMember((cur) => {
      let newName = { ...cur };
      newName.name = event.target.value;
      return newName;
    });
  };
  const majorChange = (event) => {
    setMember((cur) => {
      let newMajor = { ...cur };
      newMajor.major = event.target.value;
      return newMajor;
    });
  };
  const emailChange = (event) => {
    setMember((cur) => {
      let newEmail = { ...cur };
      newEmail.email = event.target.value;
      return newEmail;
    });
  };
  const doctorateChange = (event) => {
    setMember((cur) => {
      let newDoctorate = { ...cur };
      newDoctorate.doctorate = event.target.value;
      return newDoctorate;
    });
  };
  const locationChange = (event) => {
    setMember((cur) => {
      let newLocation = { ...cur };
      newLocation.location = event.target.value;
      return newLocation;
    });
  };
  const phoneNumChange = (event) => {
    setMember((cur) => {
      let newphoneNum = { ...cur };
      newphoneNum.number = event.target.value;
      return newphoneNum;
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
  const imgChange = (event) => {
    setMember((cur) => {
      let newImg = { ...cur };
      newImg.image = event.target.value;
      return newImg;
    });
  };

  // member 정보 post 요청(등록) 함수
  const postMember = async () => {
    try {
      const response = await axios.post(
        "/api/admin/members/professor/new",
        member
      );
    } catch (error) {
      console.log(error);
    }
  };

  // 등록 버튼 핸들러
  const handleRegisterButton = () => {
    postMember();
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("구성원 > 교수 > 신규등록");
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={10}
      >
        {/* 분야, 제목, 내용, 요약, 참여자를 추가하는 부분 */}
        <Grid item sx={{ width: { xs: "90%", md: "80%" } }}>
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
            sx={{ width: "100%", marginTop: 1 }}
            label="박사학위"
            multiline
            maxRows={4}
            onChange={doctorateChange}
            value={member.doctorate}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="위치"
            multiline
            maxRows={4}
            onChange={locationChange}
            value={member.location}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="전화번호"
            multiline
            maxRows={4}
            onChange={phoneNumChange}
            value={member.number}
          />
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
            value={member.image}
          />
        </Grid>
      </Grid>

      {/* 취소, 등록버튼. 취소 버튼을 누르면 이전 페이지로 이동함 */}
      <Grid container justifyContent="flex-end" alignItems="center" my={5}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("./..");
            }}
          >
            취소
          </Button>
          <Button
            variant="outlined"
            sx={{ mr: 3, height: 55 }}
            type="submit"
            onClick={handleRegisterButton}
          >
            등록
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfessorNew;
