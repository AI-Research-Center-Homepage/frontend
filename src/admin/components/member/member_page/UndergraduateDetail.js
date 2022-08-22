import { TextField, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-08-22
 *@description 학사 상세보기 페이지
 *             useParams로 id값을 받아와 그 값으로 다시 데이터 요청
 *             UndergraduateNew와 다르게 전달받은 데이터를 미리 보여줌
 */

const UndergraduateDetail = ({ delMainText }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");
  const [admission, setAdmission] = useState("");
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

  const nameChange = (event) => {
    setName(event.target.value);
  };
  const majorChange = (event) => {
    setMajor(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const admissionChange = (event) => {
    setAdmission(event.target.value);
  };
  const IDChange = (event) => {
    setID(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const imgChange = (event) => {
    setImg(event.target.value);
  };

  // Mock서버 한계로 학사는 Mock서버에 등록해놓지 않음
  // 단 교수와 구현은 동일하다
  useEffect(() => {
    // axios({
    //   method: "get",
    //   url: `https://4051bb99-f161-4f6e-8c33-dd389141803f.mock.pstmn.io//members/${id}`,
    //   responseType: "json",
    // }).then((response) => {
    //   setName(response.data.name);
    //   setMajor(response.data.major);
    //   setEmail(response.data.email);
    //   setAdmission(response.data.admission);
    //   setID(response.data.adminDto.loginId);
    //   setPassword(response.data.adminDto.password);
    //   setImg(response.data.image);
    // });
  });

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
            value={name}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="전공"
            multiline
            maxRows={4}
            onChange={majorChange}
            value={major}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="이메일"
            multiline
            maxRows={4}
            onChange={emailChange}
            value={email}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="입학년도"
            multiline
            maxRows={4}
            onChange={admissionChange}
            value={admission}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="아이디"
            multiline
            maxRows={4}
            onChange={IDChange}
            value={ID}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="패스워드"
            multiline
            maxRows={4}
            onChange={passwordChange}
            value={password}
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
            value={img}
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
              delMainText();
              navigate("/admin/members/undergraduate");
            }}
          >
            취소
          </Button>
          {/* 탈퇴작업 필요 */}
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              delMainText();
              navigate("/admin/members/undergraduate");
            }}
          >
            탈퇴
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

export default UndergraduateDetail;
