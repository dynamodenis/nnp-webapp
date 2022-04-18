import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://nyeripolydigidairy.com/backend",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // httpsAgent: new https.Agent({  
  //   rejectUnauthorized: false
  // })
  // timeout: 20000,
  //  // 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
});

export default apiClient;