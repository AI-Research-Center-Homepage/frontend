import { Button, TextField, Typography, Icon } from "@mui/material";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useState } from "react";

const AdminSignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

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
          onClick={checkValue}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default AdminSignIn;
