import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import GeneralButton from "./GeneralButton";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-10-29
 *@description 연구 등록하기, 자세히 보기 페이지 양식
 */

const ResearchRegisterForm = ({ researchData, researchType, pageType }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 멤버 값 따로 저장
  const [members, setMembers] = useState([]);
  // 멤버 값 출력을 위해 문자열로 저장
  const [research, setResearch] = useState({
    title: "", // demo, thesis
    content: "", // demo, project
    description: "", // demo, project
    url: "", // demo, thesis
    participants: "", // demo, project
    name: "", // project
    fieldName: "", // project, thesis
    koName: "", // thesis
    enName: "", // thesis
    journal: "", // thesis
    publishDate: "", // thesis
    //members: [], // thesis => 멤버 목록을 배열값으로 저장
  });

  const dummyMembers = [
    { id: 1, name: "멤버1" },
    { id: 2, name: "멤버2" },
    { id: 3, name: "멤버3" },
  ];

  const dummyField = [
    { id: 10, fieldName: "연구분야1" },
    { id: 20, fieldName: "연구분야2" },
    { id: 30, fieldName: "연구분야3" },
  ];

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (e.target.name === "members") {
      setMembers({
        ...members,
        value,
      });
    } else {
      setResearch({
        ...research,
        [name]: value,
      });
    }
  };

  // research 정보 등록 요청 함수
  const postResearch = async () => {
    try {
      const response = await axios.post(
        `/api/admin/${researchType}/new`,
        research
      );
    } catch (error) {
      console.log(error);
    }
  };

  // research 정보 수정 요청 함수
  const putResearch = async () => {
    try {
      const response = await axios.put(
        `/api/admin/${researchType}/?${researchType}Id=${id}`,
        research
      );
    } catch (error) {
      console.log(error);
    }
  };

  // research 정보 탈퇴 요청 함수
  const deleteResearch = async () => {
    try {
      const response = await axios.delete(
        `/api/admin/${researchType}/?${researchType}Id=${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  // 등록 버튼 핸들러
  const handleRegisterButton = () => {
    postResearch();
  };

  // 수정 버튼 핸들러
  const handleModifyButton = () => {
    putResearch();
  };

  // 탈퇴 버튼 핸들러
  const handleWithdrawalButton = () => {
    deleteResearch();
  };

  // mount
  useEffect(() => {
    setResearch(researchData);
    setMembers(researchData.members);
  }, []);

  return (
    <Box sx={{ py: "3%", px: "7.5%" }}>
      {(researchType === "demo" || researchType === "thesis") && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="제목"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.title}
          name="title"
        />
      )}
      {researchType === "project" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="이름"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.name}
          name="name"
        />
      )}
      {(researchType === "demo" || researchType === "project") && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="내용"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.content}
          name="content"
        />
      )}
      {(researchType === "demo" || researchType === "project") && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="설명"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.description}
          name="description"
        />
      )}
      {(researchType === "demo" || researchType === "project") && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="참여자"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.participants}
          name="participants"
        />
      )}
      {researchType === "thesis" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="한글이름"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.koName}
          name="koName"
        />
      )}
      {researchType === "thesis" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="영어이름"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.enName}
          name="enName"
        />
      )}
      {researchType === "thesis" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="저널"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.journal}
          name="journal"
        />
      )}
      {researchType === "thesis" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="출판일"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.publishDate}
          name="publishDate"
        />
      )}
      {(researchType === "demo" || researchType === "thesis") && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="URL"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.url}
          name="url"
        />
      )}
      {(researchType === "project" || researchType === "thesis") && (
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="fieldSelect-label">연구분야</InputLabel>
          <Select
            labelId="fieldSelect-label"
            name="fieldName"
            value={research.fieldName}
            label="field"
            onChange={handleChangeInput}
            defaultValue=""
          >
            {dummyField.map((name) => (
              <MenuItem value={name.fieldName}>{name.fieldName}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {researchType === "thesis" && (
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="fieldSelect-label">참여자</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            name="members"
            value={members}
            label="field"
            onChange={handleChangeInput}
            renderValue={() => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {members.map((value) => {
                  return <Chip key={value} label={value} />;
                })}
              </Box>
            )}
          >
            {dummyMembers.map((member) => (
              <MenuItem key={member.id} value={member.name}>
                {member.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <Box sx={{ display: "flex", my: "2%", justifyContent: "flex-end" }}>
        {pageType === "new" && (
          <>
            <GeneralButton
              content="취소하기"
              onClick={() => navigate("./../")}
              sx={{ mr: "1%" }}
            />
            <GeneralButton content="등록하기" onClick={handleRegisterButton} />
          </>
        )}
        {pageType === "detail" && (
          <>
            <GeneralButton
              content="취소하기"
              onClick={() => navigate("./../")}
            />
            <GeneralButton
              content="탈퇴하기"
              onClick={handleWithdrawalButton}
              sx={{ mx: "1%" }}
            />
            <GeneralButton content="수정하기" onClick={handleModifyButton} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default ResearchRegisterForm;
