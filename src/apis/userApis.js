import axios from 'axios';

const login = async (userInfo) => {
  let loginSuccess = false;
  const data = {
    username: userInfo.username,
    pw: userInfo.pw,
  },
  res = await axios.post('/api/userLogin', data)
  if (res.data.status === 1) {
    if (res.data.user_id) {
      localStorage.setItem('user', JSON.stringify(res.data));
      loginSuccess = true;
    }
  }
  return loginSuccess;
}

export const getTotalScore = async () => {
  let totalScore = 0;
  const user = JSON.parse(localStorage.getItem('user'));
  const data = {
    userId: user.user_id
  },
  res = await axios.post('/api/getTotalScore', data)
  if (res.data.status === 1) {
    totalScore = res.data.totalScore;
  }
  return totalScore;
}

export const updateUserScore = async (scoreData) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const data = {
    userId: user.user_id,
    score: scoreData.score,
    counting_line: scoreData.counting_line
  },
  res = await axios.post('/api/updateUserScore', data)
  let newTotalScore = 0
  if (res.data.status === 1) {
    newTotalScore = res.data.totalScore;
  }
  return newTotalScore;
}

export default login;


