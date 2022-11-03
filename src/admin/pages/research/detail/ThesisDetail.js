import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { changeMainHeaderContext } from "../../../AdminMain";
import ResearchRegisterForm from "../../../components/ResearchRegisterForm";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-10-29
 *@description 논문 자세히보기 및 수정, 삭제가 가능함
 */

export default function ThesisDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const [research, setResearch] = useState({
    title: "",
    koName: "",
    enName: "",
    journal: "",
    publishDate: "",
    url: "",
    fieldName: "",
    members: "",
  });

  const [isSetResearch, setIsSetResearch] = useState(false);

  const getResearch = async () => {
    try {
      const response = await axios.get(`/api/admin/thesis/${id}`);
      setResearch(response.data);
      setIsSetResearch(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("연구 > 논문 > 상세정보");
      getResearch();
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return (
    isSetResearch && (
      <ResearchRegisterForm
        researchData={research}
        researchType="thesis"
        pageType="detail"
      />
    )
  );
}
