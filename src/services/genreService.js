import http from "./httpService";
import config from "../../src/config.json";
export function getGenres() {
  return http.get(config.apiUrl + "genres");
}
