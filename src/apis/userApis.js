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
      localStorage.setItem('user', JSON.stringify(res.data.user_id));
      loginSuccess = true;
    }
  }
  return loginSuccess;
}

export const getTotalScore = async () => {
  let totalScore = 0;
  const user = localStorage.getItem('user'),
  data = {
    userId: user
  },
  res = await axios.post('/api/getTotalScore', data)
  console.log("getTotalScore " ,res)
  if (res.data.status === 1) {
    totalScore = res.data.totalScore;
  }
  return totalScore;
}

export default login;


