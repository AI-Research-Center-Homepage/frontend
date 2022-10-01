import { TextField } from "@mui/material";

const TitleTextField = ({ onChange }) => {
  return (
    <div>
      <TextField
        variant="outlined"
        sx={{
          width: "100%",
          my: "3%",
        }}
        label="제목"
        onChange={onChange}
      />
    </div>
  );
};

export default TitleTextField;
