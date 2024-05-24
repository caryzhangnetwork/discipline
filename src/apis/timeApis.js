import axios from 'axios';

const postTimeSlot = async (actionType) => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log("this is timeslot user ", user)
  const data = {
    createDate: new Date(Date.now()).toString(),
    actionType: actionType,
    createBy: user !== undefined ? user.user_id : -1
  };
  console.log("this is data ", data)
  const res = await axios.post('/api/createTimeSlot', data)
  console.log("this is res ", res)
  if (res.data.status === 1) {
    console.log("this is res.data.status 1 ", res.data.status)
    console.log("this is res.data.score ", res.data.score)
    return res.data.score;
  } else {
    console.log("this is res.data.status 2 ", res.data.status)
    console.log("0 ", 0)
    return 0;
  }
}

export default postTimeSlot;


