import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Select,
  Button,
  Grid,
} from "@mui/material";

import { changeMainHeaderContext } from "../../../AdminMain";

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
 *@date 2022-09-17
 *@description 논문 자세히보기 및 수정, 삭제가 가능함
 */

export default function ThesisDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const [field, setField] = useState("");
  const [title, setTitle] = useState("");
  const [krName, setKrName] = useState("");
  const [enName, setEnName] = useState("");
  const [urls, setUrl] = useState("");
  const [journals, setJournals] = useState("");
  const [date, setDate] = useState("");
  const [participant, setParticipant] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const krNameChange = (event) => {
    setKrName(event.target.value);
  };

  const enNameChange = (event) => {
    setEnName(event.target.value);
  };

  const urlsChange = (event) => {
    setUrl(event.target.value);
  };

  const journalsChange = (event) => {
    setJournals(event.target.value);
  };

  const dateChange = (event) => {
    setDate(event.target.value);
  };

  const handleChange = (event) => {
    setField(event.target.value);
  };

  const memberChange = (event) => {
    setParticipant(event.target.value);
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 논문 > 상세보기");
    } else {
      navigate("/admin/signin");
    }
  });

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={15}
      >
        {/* 연구분야, 제목, 참여자 등 자세한 정보를 출력함 */}
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
            label="한글이름"
            multiline
            maxRows={4}
            value={krName}
            onChange={krNameChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
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

      {/* 취소, 수정, 삭제 버튼. 취소 버튼을 누르면 이전 페이지로 이동 */}
      <Grid container justifyContent="flex-end" alignItems="center" mt={10}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("./..");
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
