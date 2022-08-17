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

// 가상의 연구분야 목록
const fieldSelect = [
  { id: 10, fieldName: "연구분야1" },
  { id: 20, fieldName: "연구분야2" },
  { id: 30, fieldName: "연구분야3" },
];

// 가상의 참여자 목록
const members = [
  { id: 10, name: "참여자1" },
  { id: 20, name: "참여자2" },
  { id: 30, name: "참여자3" },
];

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-08-16
 *@description 논문을 추가하는 등록창
 */

export default function ThesisNew() {
  const navigate = useNavigate();

  // 분야, 제목, 한글이름, 영어이름, url, 저자, 날짜, 참여자 변수
  const [field, setField] = useState("");
  const [title, setTitle] = useState("");
  const [krName, setKrName] = useState("");
  const [enName, setEnName] = useState("");
  const [urls, setUrl] = useState("");
  const [journals, setJournals] = useState("");
  const [date, setDate] = useState("");
  const [participant, setParticipant] = useState("");

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const krNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKrName(event.target.value);
  };

  const enNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnName(event.target.value);
  };

  const urlsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const journalsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJournals(event.target.value);
  };

  const dateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setField(event.target.value);
  };

  const memberChange = (event: SelectChangeEvent) => {
    setParticipant(event.target.value);
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
        {/* 저장된 연구분야 중 하나를 선택할 수 있는 기능 */}
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

          {/* 제목, 한글이름, 영문 이름 등 필요한 정보를 작성하는 TextField */}
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="제목"
            multiline
            maxRows={4}
            value={title}
            onChange={titleChange}
          />
          <TextField
            sx={{ width: "50%", marginTop: 1 }}
            label="한글이름"
            multiline
            maxRows={4}
            value={krName}
            onChange={krNameChange}
          />
          <TextField
            sx={{ width: "50%", marginTop: 1 }}
            label="영문이름"
            multiline
            maxRows={4}
            value={enName}
            onChange={enNameChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="저널"
            multiline
            maxRows={4}
            value={journals}
            onChange={journalsChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="출판일"
            multiline
            maxRows={4}
            value={date}
            onChange={dateChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="url"
            multiline
            maxRows={4}
            value={urls}
            onChange={urlsChange}
          />

          {/* 저장된 참여자를 선택할 수 있는 기능 */}
          <FormControl fullWidth sx={{ marginTop: 1 }}>
            <InputLabel id="members-label">참여자</InputLabel>
            <Select
              labelId="members-label"
              id="memberSelect"
              value={participant}
              label="participants"
              onChange={memberChange}
            >
              {members.map((name) => (
                <MenuItem value={name.id}>{name.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* 취소, 등록 버튼. 취소 버튼을 누르면 이전 페이지로 이동함*/}
      <Grid container justifyContent="flex-end" alignItems="center" mt={10}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate(-1);
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
