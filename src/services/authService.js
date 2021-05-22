import http from "./httpService";
import config from "../../src/config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = config.apiUrl + "auth";
const tokenKey = "token";

http.setJwt(getJwt());
export async function login(credentials) {
  const body = {
    email: credentials.username,
    password: credentials.password
  };
  const { data: jwt } = await http.post(apiEndpoint, body);
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  return localStorage.removeItem(tokenKey);
}

export function getCurrentUSer() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getJwt,
  getCurrentUSer
};
