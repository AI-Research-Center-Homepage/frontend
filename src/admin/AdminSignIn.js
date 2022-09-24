import { Button, TextField, Typography } from "@mui/material";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { changeMainHeaderContext } from "./AdminMain";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-09-17
 *@description 관리자 로그인 페이지
 *             로그인시 성공 여부를 sessionStorage에 가짐
 *             정규표현식을 이용하여 유효성검사
 */

const dummy = [
  {
    loginId: "admin1",
    password: "adminpw1",
  },
  {
    loginId: "admin2",
    password: "adminpw2",
  },
  {
    loginId: "admin3",
    password: "adminpw3",
  },
];

const AdminSignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { changeMainText } = useContext(changeMainHeaderContext);
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
      setPassword("");
      setId("");
      setIsError(true);

      return false;
    }
    return true;
  };

  const onSubmitBtnClick = () => {
    if (checkValue()) {
      // 유효성 검사 성공
      let flag = true;
      dummy.map((cur) => {
        if (cur.loginId === id) {
          if (cur.password === password) {
            sessionStorage.setItem("isSignedIn", "true");
            alert("로그인 되었습니다.");
            navigate("/admin/main");
          } else {
            alert("pw를 확인해주세요.");
          }
          return false;
        }
      });

      if (flag === false) {
        alert("존재하지 않는 아이디입니다.");
        return;
      }
    } else {
      // 유효성 검사 실패
      alert("아이디 혹은 비밀번호를 확인해주세요!");
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
      <form onSubmit={() => onSubmitBtnClick()}>
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
          id="id"
          label="ID *"
          value={id}
          sx={{ width: "100%", mt: 4 }}
          name="id"
          onChange={idChange}
          error={isError ? true : false}
          helperText={isError ? "ID 또는 PassWord를 확인해주세요!" : ""}
        />
        <TextField
          id="pw"
          label="PassWord *"
          value={password}
          sx={{ width: "100%", mt: 4 }}
          name="password"
          onChange={passwordChange}
          error={isError ? true : false}
          helperText={isError ? "ID 또는 PassWord를 확인해주세요!" : ""}
          type="password"
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 4, width: "100%" }}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default AdminSignIn;
