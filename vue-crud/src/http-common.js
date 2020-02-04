import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.0.60:8080/api",  // 스프링 컨트롤러 baseURL
  headers: {
    "Content-type": "application/json"
  }
});