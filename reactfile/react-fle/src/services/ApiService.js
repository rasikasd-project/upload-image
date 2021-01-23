import axios from 'axios';

class ApiService {

    upload(data) {
        return axios.post('http://localhost:8080/files', data);
    }
}

export default new ApiService();
