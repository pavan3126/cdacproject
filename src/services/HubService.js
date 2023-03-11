import axios from "axios";

const HUB_BASE_REST_API_URL = "http://localhost:44364/gethubbycid";

class HubService {
  getAllHubs() {
    return axios.get(HUB_BASE_REST_API_URL);
  }

  createHub(hub) {
    return axios.post(HUB_BASE_REST_API_URL, hub);
  }

  getHubById(hubId) {
    return axios.get(HUB_BASE_REST_API_URL + "/" + hubId);
  }

//   getHubByCityId(cityId) {
//     return axios.get(HUB_BASE_REST_API_URL + "/city/" + cityId);
//   }

  updateHub(hubId, hub) {
    return axios.put(HUB_BASE_REST_API_URL + "/" + hubId, hub);
  }

  deleteHub(hubId) {
    return axios.delete(HUB_BASE_REST_API_URL + "/" + hubId);
  }
}

export default new HubService();
