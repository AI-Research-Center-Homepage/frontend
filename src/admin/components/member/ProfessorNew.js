import { TextField, Button, Grid } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfessorNew = ({ delMainText }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");
  const [doctorate, setDoctorate] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
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
  const doctorateChange = (event) => {
    setDoctorate(event.target.value);
  };
  const locationChange = (event) => {
    setLocation(event.target.value);
  };
  const phoneNumChange = (event) => {
    setPhoneNum(event.target.value);
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
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="전공"
            multiline
            maxRows={4}
            onChange={majorChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="이메일"
            multiline
            maxRows={4}
            onChange={emailChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="박사학위"
            multiline
            maxRows={4}
            onChange={doctorateChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="박사학위"
            multiline
            maxRows={4}
            onChange={doctorateChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="위치"
            multiline
            maxRows={4}
            onChange={locationChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="전화번호"
            multiline
            maxRows={4}
            onChange={phoneNumChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="아이디"
            multiline
            maxRows={4}
            onChange={IDChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="패스워드"
            multiline
            maxRows={4}
            onChange={passwordChange}
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
              delMainText();
              navigate("/admin/members/professor");
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

export default ProfessorNew;
