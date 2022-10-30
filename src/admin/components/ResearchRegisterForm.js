import React from "react";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  List,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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

  const [strMem, setStrMem] = useState("");
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

  // 멤버를 제외한 핸들러
  const handleChangeInput = (e) => {
    setResearch({
      ...research,
      [e.target.name]: e.target.value,
    });
  };

  // 멤버 핸들러
  // 선택되면 값을 추가해주고 이미 선택되어 있으면
  // filter로 값을 제거하고 클래스와 배경색을 제거
  const handleChangeMembers = (e) => {
    const val = e.target.id;

    if (e.target.classList.contains("checked")) {
      e.target.classList.remove("checked");
      e.target.style.backgroundColor = "white";

      const mem = members.filter((element) => element !== val);
      setMembers(mem);
    } else {
      setMembers([...members, val]);
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
    if (pageType === "detail") setMembers(researchData.members);
  }, []);

  // 멤버가 변할 때 실행됨
  // 클릭된 컴포넌트의 배경색과 클래스명을 변경
  // 추가로 input value값을 변경하여 시각적으로 표현
  useEffect(() => {
    members.map((member) => {
      const obj = document.getElementById(`${member}`);
      obj.style.backgroundColor = "#DAF8F7";
      obj.classList.add("checked");
      return true;
    });

    let str = "";
    members.map((member) => (str += "," + member));
    str = str.slice(1, str.length);
    setStrMem(str);
  }, [members]);

  return (
    <Box sx={{ py: "3%", px: "7.5%" }}>
      {(researchType === "demo" || researchType === "thesis") && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="제목"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research?.title}
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
          value={research?.name}
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
          value={research?.content}
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
          value={research?.description}
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
          value={research?.participants}
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
          value={research?.koName}
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
          value={research?.enName}
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
          value={research?.journal}
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
          value={research?.publishDate}
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
          value={research?.url}
          name="url"
        />
      )}
      {(researchType === "project" || researchType === "thesis") && (
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="fieldSelect-label">연구분야</InputLabel>
          <Select
            labelId="fieldSelect-label"
            name="fieldName"
            value={research?.fieldName}
            label="field"
            onChange={handleChangeInput}
            defaultValue=""
          >
            {dummyField.map((field) => (
              <MenuItem key={field.id} value={field.fieldName}>
                {field.fieldName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {researchType === "thesis" && (
        <div>
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel>참여자</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<ArrowDropDownIcon />}
              value={strMem}
              onClick={() => {
                if (
                  document.getElementById("memberList").style.visibility ===
                  "visible"
                )
                  document.getElementById("memberList").style.visibility =
                    "hidden";
                else
                  document.getElementById("memberList").style.visibility =
                    "visible";
              }}
            />
          </FormControl>
          <List
            id="memberList"
            sx={{
              borderRadius: "4px",
              boxShadow: "0.5px 0.5px 10px 0.5px grey",
              visibility: "hidden",
            }}
          >
            {dummyMembers.map((member) => (
              <MenuItem
                key={member.id}
                id={member.name}
                value={member.name}
                onClick={handleChangeMembers}
              >
                {member.name}
              </MenuItem>
            ))}
          </List>
        </div>
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
