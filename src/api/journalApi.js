
import axios from 'axios';

const journalApi = axios.create({
    baseURL:'https://vue-demos-cf6c7-default-rtdb.firebaseio.com'
})

export default journalApi;