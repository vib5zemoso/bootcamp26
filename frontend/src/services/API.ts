import axios from "axios";
export default axios.create({
  baseURL: "http://13.210.73.88:8090",
});
console.log(process.env.REACT_APP_API_ENDPOINT);
