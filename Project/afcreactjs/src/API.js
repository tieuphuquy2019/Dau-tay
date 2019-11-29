import axios from "axios";
import { setToken } from "./utils/api";
const tokenProvider = require('axios-token-interceptor');





const Instance  = axios.create({

   headers: { 
     "Access-Control-Allow-Origin": "http://localhost:3000",
     'Content-Type': 'application/json;charset=UTF-8',
     "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET,OPTIONS",
     'Accept': 'text/json',
      common : {'Authorization': 'bearer ${token}'} ,
      Authorization: 'Bearer ' + sessionStorage.getItem("jwt")
      
    
    },

  baseURL: "http://localhost:1516/",
  responseType: "json",
  withCredentials: false,
  credentials: 'http://localhost:3000',
  timeout: 100000,
  },
  
  
  );

  Instance.interceptors.request.use(tokenProvider({
  token: 'abc',
  header: 'X-Api-Key',
  headerFormatter: (token) => 'token/' + token,
  }));
  

  
   export default  Instance;
