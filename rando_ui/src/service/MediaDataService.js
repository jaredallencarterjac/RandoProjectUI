import axios from 'axios'

const USER  = "user"
const MEDIA_API_URL = 'http://localhost:8080'
const USER_API_URL = '${MEDIA_API_URL}/users/${USER}' 

class MediaDataService {

    retrieveAllMedia(name) {
        return axios.get('${USER_API_URL}/media');
    }
}

export default new MediaDataService()