import axios from 'axios'
import env from 'react-dotenv'
import { uri, userDefault } from '../public/index'

export const setInputChange = (e, setInputValue) => {
  setInputValue(e.target.value)
}

export const getUser = (setUser) => {
  const options = {
    headers: { Authorization: env.TOKEN_GITHUB }
  }
  axios.get(uri + userDefault, options)
    .then(response => setUser(response.data))
}
