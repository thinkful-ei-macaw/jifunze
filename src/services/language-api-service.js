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
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },

  postGuess(guess) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + TokenService.getAuthToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ guess })
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  }
};


export default LanguageApiService;
