import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Select,
  SelectChangeEvent,
  Button,
  Grid,
} from "@mui/material";

// 가상의 연구분야 리스트
const fieldSelect = [
  { id: 10, fieldName: "연구분야1" },
  { id: 20, fieldName: "연구분야2" },
  { id: 30, fieldName: "연구분야3" },
];

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-08-16
 *@description 프로젝트를 추가하는 등록창
 */

export default function ProjectNew() {
  const navigate = useNavigate();

  // 프로젝트 분야, 제목, 내용, 요약, 참여멤버 변수
  const [field, setField] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [description, setDescription] = useState("");
  const [member, setMember] = useState("");

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
    setMember(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setField(event.target.value);
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={15}
      >
        {/* 분야, 제목, 내용, 요약, 참여자를 추가하는 부분 */}
        <Grid item sx={{ width: { xs: "90%", md: "80%" } }}>
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
                <MenuItem value={name.id}>{name.fieldName}</MenuItem>
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
            value={member}
            onChange={participantsChange}
          />
        </Grid>
      </Grid>

      {/* 취소, 등록버튼. 취소 버튼을 누르면 이전 페이지로 이동함 */}
      <Grid container justifyContent="flex-end" alignItems="center" mt={10}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("/admin/project");
            }}
          >
            취소
          </Button>
          <Button variant="outlined" sx={{ mr: 3, height: 55 }}>
            등록
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
