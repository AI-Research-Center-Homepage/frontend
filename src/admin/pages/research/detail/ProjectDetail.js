import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ResearchRegisterForm from "../../../components/ResearchRegisterForm";

import axios from "axios";
import { changeMainHeaderContext } from "../../../AdminMain";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-29
 *@description 프로젝트 자세히 보기 페이지
 */

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const [research, setResearch] = useState({
    name: "",
    content: "",
    description: "",
    participants: "",
    fieldName: "",
  });

  const [isSetResearch, setIsSetResearch] = useState(false);

  const getResearch = async () => {
    try {
      const response = await axios.get(`/api/admin/project/${id}`);
      setResearch(response.data);
      setIsSetResearch(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 프로젝트 > 상세정보");
      getResearch();
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    isSetResearch && (
      <ResearchRegisterForm
        researchData={research}
        researchType="project"
        pageType="detail"
      />
    )
  );
};

export default ProjectDetail;
