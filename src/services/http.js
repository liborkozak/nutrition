import axios from "axios";

class HttpService {
  constructor() {
    this.http = axios.create();
  }

  /**
   * Set the Vuex store to be used inside this service.
   *
   * @param {Vuex.Store} store
   */
  setStore(store) {
    this.store = store;
  }

  /**
   * Handles GET requests.
   *
   * @param {string} url - the server URL that will be used for the request
   * @param {Object} [config={}] - axios config options
   * @return {Promise.<Object>}
   */
  get(url, config = {}) {
    return this.http.get(url, config);
  }

  /**
   * Handles PATCH requests.
   *
   * @param {string} url - the server URL that will be used for the request
   * @param {Object} [data={}] - the data to be sent as the request body
   * @param {Object} [config={}] - axios config options
   * @return {Promise.<Object>}
   */
  patch(url, data = {}, config = {}) {
    return this.http.patch(url, data, config);
  }

  /**
   * Handles POST requests.
   *
   * @param {string} url - the server URL that will be used for the request
   * @param {Object} [data={}] - the data to be sent as the request body
   * @param {Object} [config={}] - axios config options
   * @return {Promise.<Object>}
   */
  post(url, data = {}, config = {}) {
    return this.http.post(url, data, config);
  }

  /**
   * Handles PUT requests.
   *
   * @param {string} url - the server URL that will be used for the request
   * @param {Object} [data={}] - the data to be sent as the request body
   * @param {Object} [config={}] - axios config options
   * @return {Promise.<Object>}
   */
  put(url, data = {}, config = {}) {
    return this.http.put(url, data, config);
  }

  /**
   * Handles DELETE requests.
   *
   * @param {string} url - the server URL that will be used for the request
   * @param {Object} [config={}] - axios config options
   * @return {Promise.<Object>}
   */
  delete(url, config = {}) {
    return this.http.delete(url, config);
  }
}

export default new HttpService();
