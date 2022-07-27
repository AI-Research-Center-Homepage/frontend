import { Box, Button, Stack } from "@mui/material";

const titleArray = [
  "이름",
  "전공",
  "이메일",
  "박사학위",
  "위치",
  "번호",
  "ID",
  "PassWord",
];

const Contents = ({ title }) => {
  return (
    <Box sx={{ display: "flex", height: "7vh", alignContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          width: "20vw",
          height: "100%",
          mr: "3vw",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "25px",
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          width: "70vw",
          height: "100%",
        }}
      >
        <input
          style={{
            width: "80%",
            height: "100%",
            fontSize: "20px",
            wordWrap: "break-word",
          }}
        />
      </Box>
    </Box>
  );
};

const MemberNew = () => {
  return (
    <div>
      <Stack sx={{ mt: "3%", ml: "5%" }} spacing={2}>
        {titleArray.map((title) => (
          <Contents key={title} title={title} />
        ))}
        <Box sx={{ display: "flex", height: "7vh", alignContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              width: "20vw",
              height: "100%",
              mr: "3vw",
              border: "1px solid black",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "25px",
            }}
          >
            사진
          </Box>
          <Box
            sx={{
              width: "70vw",
              height: "100%",
            }}
          >
            <input
              style={{
                width: "70%",
                height: "100%",
              }}
              readOnly
            />
            <Button
              size="large"
              variant="contained"
              sx={{ width: "10%", height: "90%", padding: 0, mr: "5%" }}
            >
              업로드
            </Button>
            <Button
              size="large"
              variant="contained"
              sx={{ padding: 0, width: "10%", height: "90%" }}
            >
              등록하기
            </Button>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default MemberNew;
