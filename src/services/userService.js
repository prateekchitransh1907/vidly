import http from "./httpService";
import config from "../../src/config.json";

const apiEndpoint = config.apiUrl + "users";

export function register(user) {
  const body = {
    email: user.username,
    password: user.password,
    name: user.name
  };
  return http.post(apiEndpoint, body);
}
