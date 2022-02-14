import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://178.62.41.139:3505",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // httpsAgent: new https.Agent({  
  //   rejectUnauthorized: false
  // })
  // timeout: 20000,
});

export default apiClient;