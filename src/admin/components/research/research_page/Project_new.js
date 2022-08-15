import * as React from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Select,
  SelectChangeEvent,
  Button,
  Grid,
} from "@mui/material";

const fieldSelect = [
  { id: 10, title: "연구분야1" },
  { id: 20, title: "연구분야2" },
  { id: 30, title: "연구분야3" },
];

export default function BasicSelect() {
  const [field, setField] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [participants, setParticipants] = React.useState("");

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const contentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const descriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const participantsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParticipants(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setField(event.target.value);
  };

  return (
    // <div // justifyContent 오류
    //   style={{
    //     display: "flex",
    //     direction: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Grid border={1}>
    //     <Box sx={{ width: { xs: "90%", md: "100%" } }} border={1}>
    //       <FormControl fullWidth>
    //         <InputLabel id="fieldSelect-label">연구분야</InputLabel>
    //         <Select
    //           labelId="fieldSelect-label"
    //           id="select"
    //           value={field}
    //           label="field"
    //           onChange={handleChange}
    //         >
    //           {fieldSelect.map((name) => (
    //             <MenuItem value={name.id}>{name.title}</MenuItem>
    //           ))}
    //         </Select>
    //       </FormControl>
    //       <TextField
    //         sx={{ width: "100%", marginTop: 1 }}
    //         label="제목"
    //         multiline
    //         maxRows={4}
    //         value={title}
    //         onChange={titleChange}
    //       />
    //       <TextField
    //         sx={{ width: "100%", marginTop: 1 }}
    //         label="내용"
    //         multiline
    //         maxRows={4}
    //         value={contents}
    //         onChange={contentsChange}
    //       />
    //       <TextField
    //         sx={{ width: "100%", marginTop: 1 }}
    //         label="요약"
    //         multiline
    //         maxRows={4}
    //         value={description}
    //         onChange={descriptionChange}
    //       />
    //       <TextField
    //         sx={{ width: "100%", marginTop: 1 }}
    //         label="참여자"
    //         multiline
    //         maxRows={4}
    //         value={participants}
    //         onChange={participantsChange}
    //       />
    //     </Box>
    //     <Box border={1} borderColor="red">
    //       <Button variant="contained" sx={{ mr: 3, height: 55 }}>
    //         취소
    //       </Button>
    //       <Button variant="outlined" sx={{ mr: 3, height: 55 }}>
    //         수정
    //       </Button>
    //       <Button variant="outlined" sx={{ mr: 3, height: 55 }}>
    //         삭제
    //       </Button>
    //     </Box>
    //   </Grid>
    // </div>

    <div>
      <Grid
        container
        border={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid sx={{ width: { xs: "90%", md: "80%" } }} border={1}>
          <FormControl fullWidth>
            <InputLabel id="fieldSelect-label">연구분야</InputLabel>
            <Select
              labelId="fieldSelect-label"
              id="select"
              value={field}
              label="field"
              onChange={handleChange}
            >
              {fieldSelect.map((name) => (
                <MenuItem value={name.id}>{name.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="제목"
            multiline
            maxRows={4}
            value={title}
            onChange={titleChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="내용"
            multiline
            maxRows={4}
            value={contents}
            onChange={contentsChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="요약"
            multiline
            maxRows={4}
            value={description}
            onChange={descriptionChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="참여자"
            multiline
            maxRows={4}
            value={participants}
            onChange={participantsChange}
          />
        </Grid>
        <Grid border={1} borderColor="red">
          <div display="flex" justifyContent="flex-end" alignItems="center">
            <Button variant="contained" sx={{ mr: 3, height: 55 }}>
              취소
            </Button>
            <Button variant="outlined" sx={{ mr: 3, height: 55 }}>
              수정
            </Button>
            <Button variant="outlined" sx={{ mr: 3, height: 55 }}>
              삭제
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
