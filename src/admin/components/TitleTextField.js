import { TextField } from "@mui/material";

const TitleTextField = () => {
  return (
    <div>
      <TextField
        variant="outlined"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          my: "3%",
        }}
        label="제목"
      />
    </div>
  );
};

export default TitleTextField;
