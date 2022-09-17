import { TextField, Button, Grid } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { changeMainTextContext } from "../../../AdminMain";

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
  const { changeMainText } = useContext(changeMainTextContext);

  const [post, setPost] = useState({
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
  const positionChange = (event) => {
    setPost((cur) => {
      let newPosition = { ...cur };
      newPosition.position = event.target.value;
      return newPosition;
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

  // Mock서버 한계로 학사는 Mock서버에 등록해놓지 않음
  // 단 교수와 구현은 동일하다
  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("구성원 > 운영위원회 > 상세보기");
      // axios({
      //   method: "get",
      //   url: `https://4051bb99-f161-4f6e-8c33-dd389141803f.mock.pstmn.io//members/${id}`,
      //   responseType: "json",
      // }).then((response) => {
      //   setPost(response.data);
      // });
    } else {
      navigate("/admin/login");
    }
  }, []);

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
            label="직책"
            multiline
            maxRows={4}
            onChange={positionChange}
            value={post.position}
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

      {/* 취소, 탈퇴, 등록버튼 */}
      <Grid container justifyContent="flex-end" alignItems="center" my={5}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("/admin/members/committee");
            }}
          >
            취소
          </Button>
          {/* 탈퇴작업 필요 */}
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("/admin/members/committee");
            }}
          >
            탈퇴
          </Button>
        </Grid>
      </Grid>
      {/* </form> */}
    </div>
  );
};

export default CommitteeDetail;
