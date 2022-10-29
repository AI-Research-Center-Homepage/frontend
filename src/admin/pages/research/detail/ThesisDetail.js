import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

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

  const dummy = {
    title: "데모1",
    koName: "조은영",
    enName: "Eunyoung-Jo",
    journal: "세상에서 제일 유명한 잡지",
    publishDate: "2022-10-29'T'10:10:10",
    url: "url!!",
    fieldName: "연구분야1",
    members: ["멤버1", "멤버2", "멤버3"],
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
