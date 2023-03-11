import axios from "axios";

const LOGIN_BASE_REST_API_URL = "http://localhost:44364/login";

class LoginService {
  getAllLogins() {
    return axios.get(LOGIN_BASE_REST_API_URL);
  }

  createLogin(login) {
    return axios.post(LOGIN_BASE_REST_API_URL, login);
  }

  getLoginById(loginId) {
    return axios.get(LOGIN_BASE_REST_API_URL + "/" + loginId);
  }

  updateLogin(loginId, login) {
    return axios.put(LOGIN_BASE_REST_API_URL + "/" + loginId, login);
  }

  deleteLogin(loginId) {
    return axios.delete(LOGIN_BASE_REST_API_URL + "/" + loginId);
  }
}

export default new LoginService();
