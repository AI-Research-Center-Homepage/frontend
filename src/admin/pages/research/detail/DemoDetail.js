import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { changeMainHeaderContext } from "../../../AdminMain";
import ResearchRegisterForm from "../../../components/ResearchRegisterForm";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-29
 *@description 데모 상세보기 페이지
 */

const DemoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const [research, setResearch] = useState({
    name: "",
    description: "",
    content: "",
    urls: "",
    participants: "",
  });

  const dummy = {
    title: "데모1",
    description: "설명1",
    content: "내용1",
    url: "링크1",
    participants: "참여자참여자참여자",
  };
  const [isSetResearch, setIsSetResearch] = useState(false);

  const getResearch = async () => {
    try {
      // const response = await axios.get(`/api/admin/demo/?demoId=${id}`);
      // setResearch(response.data);

      // 삭제필
      setResearch(dummy);

      setIsSetResearch(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 데모 > 상세정보");
      getResearch();
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    isSetResearch && (
      <ResearchRegisterForm
        researchData={research}
        researchType="demo"
        pageType="detail"
      />
    )
  );
};

export default DemoDetail;
