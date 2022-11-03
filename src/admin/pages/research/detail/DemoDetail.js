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
    title: "",
    description: "",
    content: "",
    urls: "",
    participants: "",
  });

  const [isSetResearch, setIsSetResearch] = useState(false);

  const getResearch = async () => {
    try {
      const response = await axios.get(`/api/admin/demo/${id}`);
      setResearch(response.data);

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
