import axios from 'axios'

const URL = 'https://4j4p13sgej.execute-api.us-east-2.amazonaws.com/dev/videos'

export default {
  getAll() {
    return axios
      .get(URL)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.error('Error retrieving videos:', error)
      })
  },

  get(id) {
    return axios
      .get(`${URL}/${id}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.error('Error retrieving video:', error)
      })
  },

  delete(id) {
    return axios
      .delete(`${URL}/${id}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.error('Error deleting video:', error)
      })
  }
}
