import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Select,
  Button,
  Grid,
} from "@mui/material";

const fieldSelect = [
  { id: 10, fieldName: "연구분야1" },
  { id: 20, fieldName: "연구분야2" },
  { id: 30, fieldName: "연구분야3" },
];

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-08-12
 *@description 프로젝트 자세히 보기 페이지
 */

export default function ProjectDetail() {
  const navigate = useNavigate();

  // 분야, 제목, 내용, 요약, 참여자 변수
  const [field, setField] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [description, setDescription] = useState("");
  const [member, setMember] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const contentsChange = (event) => {
    setContents(event.target.value);
  };

  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const participantsChange = (event) => {
    setMember(event.target.value);
  };

  const handleChange = (event) => {
    setField(event.target.value);
  };

  return (
    <div>
      {/* 분야, 내용 등 자세한 정보를 볼 수 있는 창 */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={15}
      >
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

      {/* 취소, 수정, 삭제 버튼 */}
      <Grid container justifyContent="flex-end" alignItems="center" mt={10}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("/admin/research/project");
            }}
          >
            취소
          </Button>
          <Button variant="outlined" sx={{ mr: 3, height: 55 }}>
            수정
          </Button>
          <Button variant="outlined" sx={{ mr: 3, height: 55 }}>
            삭제
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
