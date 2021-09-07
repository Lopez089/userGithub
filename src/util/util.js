import axios from 'axios'
import env from 'react-dotenv'
import { uri, userDefault } from '../public/index'

export const setInputChange = (e, setInputValue) => {
  setInputValue(e.target.value)
}

const hasInputValue = (inputvalue) => inputvalue ? (uri + inputvalue) : (uri + userDefault)

export const getUser = (setUser, inputvalue) => {
  const options = {
    headers: { Authorization: env.TOKEN_GITHUB }
  }

  axios.get(hasInputValue(inputvalue), options)
    .then(response => setUser(response.data))
}
