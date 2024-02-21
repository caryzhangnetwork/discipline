import axios from 'axios';

const postTimeSlot = (actionType) => {
  const user = localStorage.getItem('user'),
  data = {
    createDate: new Date(Date.now()).toString(),
    actionType: actionType,
    createBy: user !== undefined ? user : -1
  };
  console.log("this is data ", data)
  axios.post('/api/createTimeSlot', data).then(res => {
    console.log("this is res ", res)
  }).catch(err => {
    console.log("this is err ", err)
  })
}

export default postTimeSlot;


