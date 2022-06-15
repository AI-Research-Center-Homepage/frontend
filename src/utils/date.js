// 인자로 받은 date 객체를 '연도-월-일 T시:분:초' 형식의 string 으로 return 하는 함수
export const getFullDate = (date) => {
  let postDate = date.substr(0, 10);
  let postDateTime = date.substr(11, 9);

  return `${postDate} ${postDateTime}`;
};

// 인자로 받은 date 객체를 '연도-월-일' 형식의 string 으로 return 하는 함수
export const getDate = (date) => {
  let postDateDate = date.substr(0, 10);

  return `${postDateDate}`;
};
