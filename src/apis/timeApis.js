import axios from 'axios';

const getTime = () => {
  axios.get('/api/books').then(res => {
    console.log("this is res ", res)
  }).catch(err => {
    console.log("this is err ", err)
  })
}

export default getTime;