import { Button } from "@mui/material";

const GeneralButton = ({ content, onClick, sx }) => {
  return (
    <Button variant="contained" size="large" onClick={onClick} sx={sx}>
      {content}
    </Button>
  );
};

export default GeneralButton;
