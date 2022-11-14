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

  // 연구분야 리스트 출력을 위함
  const [allFields, setAllFields] = useState({ fields: [] });
  // 멤버 카테고리 값 가짐
  const [memberType, setMemberType] = useState("professor");
  // 멤버 카테고리 값 기준 불러온 데이터를 가짐
  const [members, setMembers] = useState({ members: [] });
  // 논문: 선택된 멤버 값 출력을 위해 문자열로 저장
  const [strMem, setStrMem] = useState("");

  // 멤버 카테고리 값이 변경되면 해당 값으로 멤버 불러옴
  const getMembers = async () => {
    try {
      const response = await axios.get(`/api/admin/members/${memberType}`);
      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 연구분야 값 가져옴
  const getFields = async () => {
    try {
      const response = await axios.get("/api/admin/fields");
      setAllFields(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
    publishDate: new Date().toISOString().slice(0, 19), // thesis
    members: [], // thesis => 멤버 목록을 배열값으로 저장
  });

  // 멤버 타입 변경 핸들러
  const handleMemType = (e) => {
    setMemberType(e.target.value);
  };

  // 멤버를 제외한 핸들러
  const handleChangeInput = (e) => {
    setResearch({
      ...research,
      [e.target.name]: e.target.value,
    });
  };

  // 멤버 핸들러
  // 선택되면 checked여부에 따라 값을 넣었다 뺌
  // 시각적으로 텍스트와 배경색도 바꿈
  const handleChangeMembers = (e) => {
    const clickedMemName = e.target.innerText;
    const clickedMemId = e.target.value;

    if (e.target.classList.contains("checked")) {
      e.target.classList.remove("checked");
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";

      const mem = research.members.filter(
        (element) => element.name !== clickedMemName
      );
      setResearch({
        ...research,
        members: mem,
      });
    } else {
      e.target.classList.add("checked");
      e.target.style.backgroundColor = "#6FADCF";
      e.target.style.color = "white";
      const copy = [...research.members];
      const size = Object.keys(copy).length;
      copy[size] = { id: clickedMemId, name: clickedMemName };
      setResearch({
        ...research,
        members: copy,
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
      alert("등록되었습니다!");
      navigate(`/admin/research/${researchType}`);
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
      alert("수정되었습니다!");
      navigate(`/admin/research/${researchType}`);
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
      alert("삭제되었습니다!");
      navigate(`/admin/research/${researchType}`);
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

  // 마운트 시 실행(마운트 되자마자 해당 값이 변경되기 때문)
  // 연구 타입, 페이지 타입에 따라 동작
  useEffect(() => {
    if (researchType === "project" || researchType === "thesis") getFields();
    if (pageType === "detail") setResearch(researchData);
  }, [pageType, researchType, researchData]);

  // 멤버가 변할 때 실행됨
  // 선택된 멤버 배열을 텍스트로 보여주기 위함
  useEffect(() => {
    let str = "";
    if (research.members)
      research.members.map((member) => (str += "," + member.name));
    str = str.slice(1, str.length);
    setStrMem(str);
  }, [research.members]);

  // 멤버 카테고리가 바뀌면 실행됨
  // 해당 카테고리의 멤버 값을 불러오기 위함
  useEffect(() => {
    getMembers();
  }, [memberType]);

  // 멤버 카테고리가 바뀌어 멤버가 바뀌면 실행됨
  // 불러온 값을 바탕으로 리스트 세팅을 위함
  useEffect(() => {
    if (members.length !== 0 && research.members !== undefined) {
      console.log(members);
      members.members.map((element) =>
        research.members.map((mElement) => {
          if (mElement.id === element.id) {
            let elem = document.getElementsByName(element.id)[0];
            elem.style.backgroundColor = "#6FADCF";
            elem.style.color = "white";
            elem.classList.add("checked");
            return false;
          }
          return true;
        })
      );
    }
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
          value={research.title ?? ""}
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
          value={research.name ?? ""}
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
          value={research.content ?? ""}
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
          value={research.description ?? ""}
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
          value={research.participants ?? ""}
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
          value={research.koName ?? ""}
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
          value={research.enName ?? ""}
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
          value={research.journal ?? ""}
          name="journal"
        />
      )}
      {researchType === "thesis" && (
        <TextField
          sx={{ width: "100%", marginTop: 1 }}
          label="출판일"
          placeholder="yyyy-mm-ddTHH:mm:ss 형식으로 입력해주세요!"
          multiline
          maxRows={4}
          onChange={handleChangeInput}
          value={research.publishDate ?? ""}
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
          value={research.url ?? ""}
          name="url"
        />
      )}
      {(researchType === "project" || researchType === "thesis") && (
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="fieldSelect-label">연구분야</InputLabel>
          <Select
            labelId="fieldSelect-label"
            name="fieldName"
            value={research.fieldName ?? ""}
            label="field"
            onChange={handleChangeInput}
          >
            {allFields.fields.map((field) => (
              <MenuItem id={field.id} key={field.id} value={field.fieldName}>
                {field.fieldName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {researchType === "thesis" && (
        <div>
          <FormControl sx={{ width: "20%", mr: "2.5%", mt: 1 }}>
            <InputLabel id="memCategory-label">참여자 카테고리</InputLabel>
            <Select
              labelId="memCategory-label"
              name="memberType"
              value={memberType}
              onChange={handleMemType}
            >
              <MenuItem value="professor">교수</MenuItem>
              <MenuItem value="researcher">연구원</MenuItem>
              <MenuItem value="graduate">석사</MenuItem>
              <MenuItem value="undergraduate">학사</MenuItem>
              <MenuItem value="committee">운영위원회</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ mt: 1, width: "77.5%" }}>
            <InputLabel id="memLists-label">참여자</InputLabel>
            <OutlinedInput
              labelId="memLists-label"
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
              boxShadow: "0.5px 0.5px 10px 0.5px grey",
              visibility: "hidden",
              width: "77.5%",
              ml: "22.5%",
              padding: "0",
            }}
          >
            {members.members.map((member) => (
              <MenuItem
                key={member.id}
                name={member.id} // 유일값으로 지정하기 위함
                value={member.id}
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
