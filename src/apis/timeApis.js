import axios from 'axios';
import { getTotalScore } from './userApis'
import { useDispatch } from 'react-redux';
import { updateTotalScore } from '../redux/userSlice';


export const usePostTimeSlot = () => {
  const dispatch = useDispatch();
  const postTimeSlot = async (actionType) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const data = {
      createDate: new Date(Date.now()).toString(),
      actionType: actionType,
      createBy: user !== undefined ? user.user_id : -1
    };
    const res = await axios.post('/api/createTimeSlot', data)
    if (res.data.status === 1) {
      const newTotalScore = await getTotalScore();
      dispatch(updateTotalScore(newTotalScore))
      return res.data.score;
    } else {
      return 0;
    }
  }
  return postTimeSlot;
}

export const usePostDuraction = () => {
  const dispatch = useDispatch();
  const postDuraction = async (actionType, duration) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const data = {
      createDate: new Date(Date.now()).toString(),
      actionType: actionType,
      duration: duration,
      createBy: user !== undefined ? user.user_id : -1
    };
    const res = await axios.post('/api/createDurationTimeSlot', data)
    if (res.data.status === 1) {
      const newTotalScore = await getTotalScore();
      dispatch(updateTotalScore(newTotalScore))
      return res.data.score;
    } else {
      return 0;
    }
  }
  return postDuraction;
}


export default usePostTimeSlot;


