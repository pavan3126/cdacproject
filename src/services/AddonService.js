import axios from "axios";

const ADDON_BASE_REST_API_URL = "http://localhost:44364/addon";

class AddonService {
  getAllAddons() {
    return axios.get(ADDON_BASE_REST_API_URL);
  }

  createAddon(addon) {
    return axios.post(ADDON_BASE_REST_API_URL, addon);
  }

  getAddonById(addonId) {
    return axios.get(ADDON_BASE_REST_API_URL + "/" + addonId);
  }

  updateAddon(addonId, addon) {
    return axios.put(ADDON_BASE_REST_API_URL + "/" + addonId, addon);
  }

  deleteAddon(addonId) {
    return axios.delete(ADDON_BASE_REST_API_URL + "/" + addonId);
  }
}

export default new AddonService();
