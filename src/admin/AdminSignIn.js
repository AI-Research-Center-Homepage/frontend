import { Button, TextField, Typography } from "@mui/material";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { changeMainTextContext } from "./AdminMain";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-09-17
 *@description 관리자 로그인 페이지
 *             로그인시 성공 여부를 sessionStorage에 가짐
 *             정규표현식을 이용하여 유효성검사
 */

const AdminSignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { changeMainText } = useContext(changeMainTextContext);
  const navigate = useNavigate();

  const idChange = (e) => {
    setId(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const checkValue = () => {
    // a-z, 0-9를 포함한 4~12글자 아이디와 비밀번호
    const Reg = /^[a-z0-9]{4,12}$/;
    if (id.match(Reg) == null || password.match(Reg) == null) {
      alert("아이디 또는 비밀번호를 확인해 주세요!");
      setPassword("");
      setId("");
      setIsError(true);
    }
  };

  useEffect(() => {
    changeMainText("로그인");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10%",
        textAlign: "center",
      }}
    >
      <form>
        <LockOpenIcon
          color="secondary"
          sx={{
            fontSize: "50px",
            mb: 1,
          }}
        />
        <Typography variant="h4" align="center">
          Sign In
        </Typography>
        <TextField
          label="ID *"
          value={id}
          sx={{ width: "100%", mt: 4 }}
          name="id"
          onChange={idChange}
          error={isError ? true : false}
          helperText={isError ? "ID 또는 PassWord를 확인해주세요!" : ""}
        />
        <TextField
          label="PassWord *"
          value={password}
          sx={{ width: "100%", mt: 4 }}
          name="password"
          onChange={passwordChange}
          error={isError ? true : false}
          helperText={isError ? "ID 또는 PassWord를 확인해주세요!" : ""}
        />
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 4, width: "100%" }}
          onClick={() => {
            checkValue();
            // 우선 임시로 유효성만 통과하면 로그인되도록 함
            sessionStorage.setItem("isSignedIn", "true");
            alert("로그인 되었습니다.");
            navigate("/admin/main");
          }}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default AdminSignIn;
