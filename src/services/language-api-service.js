import config from "../config";
import TokenService from "./token-service";

const LanguageApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },

  getHead() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + TokenService.getAuthToken(),
      },
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }

      return res.json()
    });
  }
};


export default LanguageApiService;
