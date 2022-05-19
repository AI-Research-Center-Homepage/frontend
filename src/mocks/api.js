import axios from "axios";

axios.defaults.baseURL =
  "https://97039e2f-9785-4469-a9c2-3b173ce13447.mock.pstmn.io/list";

export default {
  // 모든 글 불러오기
  getCommittee() {
    return axios.get("/committee/");
  },

  getArticle() {
    return axios.get("/article/");
  },

  // 글 작성하기
  // createPost(data) {
  //     return axios.post('/posts/', data)
  // },

  // // 글 제거하기
  // deletePost(id) {
  //     return axios.delete('/posts/'+String(id))
  // }
};
