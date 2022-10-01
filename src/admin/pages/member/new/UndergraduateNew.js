import { TextField, Button, Grid } from "@mui/material";

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { changeMainHeaderContext } from "../../../AdminMain";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-09-17
 *@description 학사 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const UndergraduateNew = () => {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("구성원 > 학사 > 신규등록");
    } else {
      navigate("/admin/signin");
    }
  }, []);

  const [post, setPost] = useState({
    name: "",
    major: "",
    email: "",
    image: "",
    admission: "",
    adminDto: {
      loginId: "",
      password: "",
    },
  });

  const nameChange = (event) => {
    setPost((cur) => {
      let newName = { ...cur };
      newName.name = event.target.value;
      return newName;
    });
  };
  const majorChange = (event) => {
    setPost((cur) => {
      let newMajor = { ...cur };
      newMajor.major = event.target.value;
      return newMajor;
    });
  };
  const emailChange = (event) => {
    setPost((cur) => {
      let newEmail = { ...cur };
      newEmail.email = event.target.value;
      return newEmail;
    });
  };
  const admissionChange = (event) => {
    setPost((cur) => {
      let newAdmission = { ...cur };
      newAdmission.admission = event.target.value;
      return newAdmission;
    });
  };
  const IDChange = (event) => {
    setPost((cur) => {
      let newID = { ...cur };
      newID.adminDto.loginId = event.target.value;
      return newID;
    });
  };
  const passwordChange = (event) => {
    setPost((cur) => {
      let newPassword = { ...cur };
      newPassword.adminDto.password = event.target.value;
      return newPassword;
    });
  };
  const imgChange = (event) => {
    setPost((cur) => {
      let newImg = { ...cur };
      newImg.image = event.target.value;
      return newImg;
    });
  };

  return (
    <div>
      {/* <form onSubmit={Submit}> */}
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
            value={post.name}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="전공"
            multiline
            maxRows={4}
            onChange={majorChange}
            value={post.major}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="이메일"
            multiline
            maxRows={4}
            onChange={emailChange}
            value={post.email}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="입학년도"
            multiline
            maxRows={4}
            onChange={admissionChange}
            value={post.admission}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="아이디"
            multiline
            maxRows={4}
            onChange={IDChange}
            value={post.adminDto.loginId}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="패스워드"
            multiline
            maxRows={4}
            onChange={passwordChange}
            value={post.adminDto.password}
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
            value={post.image}
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
          <Button variant="outlined" sx={{ mr: 3, height: 55 }} type="submit">
            등록
          </Button>
        </Grid>
      </Grid>
      {/* </form> */}
    </div>
  );
};

export default UndergraduateNew;
