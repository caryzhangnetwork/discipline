import axios from 'axios';


export const getScoreBoard = async (type) => {
  let scoreBoards = [];
  const res = await axios.post('/api/getScoreBoard', {type})
  if (res.data.status === 1) {
    scoreBoards = res.data.score_board;
  }
  return scoreBoards;
}


export default getScoreBoard;


