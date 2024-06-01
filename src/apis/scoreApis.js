import axios from 'axios';


export const getScoreBoard = async (type) => {
  let scoreBoards = [];
  console.log("this is data ", type)
  const res = await axios.post('/api/getScoreBoard', {type})
  console.log("getScoreBoard " ,res)
  if (res.data.status === 1) {
    scoreBoards = res.data.score_board;
  }
  return scoreBoards;
}


export default getScoreBoard;


