import * as React from "react";
import { useNavigate } from "react-router-dom";
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

const fieldSelect = [
  { id: 10, fieldName: "연구분야1" },
  { id: 20, fieldName: "연구분야2" },
  { id: 30, fieldName: "연구분야3" },
];

const members = [
  { id: 10, name: "참여자1" },
  { id: 20, name: "참여자2" },
  { id: 30, name: "참여자3" },
];

export default function ThesisNew() {
  const navigate = useNavigate();
  const [field, setField] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [krName, setKrName] = React.useState("");
  const [enName, setEnName] = React.useState("");
  const [urls, setUrl] = React.useState("");
  const [journals, setJournals] = React.useState("");
  const [date, setDate] = React.useState("");
  const [participant, setParticipant] = React.useState("");

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
