import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

/**
 *@author Eunyoung-Jo, czne2@jbnu.ac.kr
 *@date 2022-08-17
 *@description 논문을 추가하는 등록창
 */

export default function DemoNew() {
  const navigate = useNavigate();

  // 이름, 요약, 설명, url, 참여자 변수
  const [demo, setDemo] = useState({
    name: "",
    description: "",
    content: "",
    url: "",
    participants: "",
  });

  const nameChange = (event) => {
    setDemo((cur) => {
      let newName = { ...cur };
      newName.name = event.target.value;
      return newName;
    });
  };
  const descriptionChange = (event) => {
    setDemo((cur) => {
      let newDescription = { ...cur };
      newDescription.description = event.target.value;
      return newDescription;
    });
  };
  const contentsChange = (event) => {
    setDemo((cur) => {
      let newContent = { ...cur };
      newContent.content = event.target.value;
      return newContent;
    });
  };
  const urlChange = (event) => {
    setDemo((cur) => {
      let newUrl = { ...cur };
      newUrl.url = event.target.value;
      return newUrl;
    });
  };

  const participantsChange = (event) => {
    setDemo((cur) => {
      let newParticipants = { ...cur };
      newParticipants.participants = event.target.value;
      return newParticipants;
    });
  };

  return (
    <div>
      {/* 제목, 내용, 요약, 참여자, url을 볼 수 있는 TextField */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={15}
      >
        <Grid item sx={{ width: { xs: "90%", md: "80%" } }}>
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="제목"
            multiline
            maxRows={4}
            value={demo.name}
            onChange={nameChange}
          />

          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="요약"
            multiline
            maxRows={4}
            value={demo.description}
            onChange={descriptionChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="내용"
            multiline
            maxRows={4}
            value={demo.content}
            onChange={contentsChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="url"
            multiline
            maxRows={4}
            value={demo.urls}
            onChange={urlChange}
          />
          <TextField
            sx={{ width: "100%", marginTop: 1 }}
            label="참여자"
            multiline
            maxRows={4}
            value={demo.participants}
            onChange={participantsChange}
          />
        </Grid>
      </Grid>

      {/* 취소, 수정, 삭제 버튼. 취소 버튼을 클릭하면 이전 페이지로 돌아감 */}
      <Grid container justifyContent="flex-end" alignItems="center" mt={10}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 3, height: 55 }}
            onClick={() => {
              navigate("/admin/research/demo");
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
