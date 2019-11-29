import API from '../API';
//---------------------------------------------------------------------
const getData = res => res.data;
//---------------------------------------------------------------------
const requests = {
    delete: url => API.delete(url).then(getData),
    get: url => API.get(url).then(getData),
    put: (url, body) => API.put(url, body).then(getData),
    post: (url, body) => API.post(url, body).then(getData)
  };
  //-------------------------------------------------------------------  
    const auth = {
    me() {
      if (!API.defaults.headers.common.authorization) {
        return Promise.resolve({ user: null });
      }
      return requests.get("/auth/me").catch(error => {
        if (error.response.status === 401) {
          window.localStorage.removeItem("jwt");
          setToken(null);
          return { user: null };
        }
        return Promise.reject(error);
      });
    },
    //-----------------------------------------------------------------------
    logout: () => {
      setToken(null);
      localStorage.removeItem("jwt");
      window.sessionStorage.removeItem("jwt");
      return Promise.resolve({ user: null });
    },
    //-------------------------------------------------------------------------
    login: ({...Data}) =>{
        requests.post("/auth/isLogin",{Data}).then(data => {
            setToken(null);
            localStorage.removeItem("jwt");
            window.sessionStorage.removeItem("jwt");
            window.localStorage.setItem("jwt", data[0].token);
            window.sessionStorage.setItem("jwt", data[0].token);
            setToken(data[0].token);
            return data;
          })
      .catch((error) =>{
        console.log(error);
      })
    },
    //---------------------------------------------------------------------------
    getall:({...Data})=>{
        requests.post("/auth/getLogin").then(data => {
            if(data)
            {
                alert(data[0].UserName);
            }
            return data;
          })
      .catch((error) =>{
        console.log(error);
      })
    },
//-------------------------------------------------------------------------------
    register: form =>
      requests.post("/auth/register", form).then(data => {
        window.localStorage.setItem("jwt", data.user.token);
        setToken(data.user.token);
        return data;
      }).catch((error) =>{
        console.log(error);
      }),
    
  };
  //------------------------------------------------------------------------------ 
  
  const users = {
    delete: id => requests.delete(`/users/${id}`),
    get: id => requests.get(id ? `/users/${id}` : "/users"),
    update: (id, updates) => requests.put(`/users/${updates.id}`, updates),
    create: user => requests.post("/users", user)
  };
  //------------------------------------------------------------------------------
  const posts = {
    delete: id => requests.delete(`/posts/${id}`),
    get: id => requests.get(id ? `/posts/${id}` : "/posts"),
    update: (id, updates) => requests.put(`/posts/${updates.id}`, updates),
    create: post => requests.post("/posts", post)
  };
  //------------------------------------------------------------------------------
  function setToken(token) {
    if (token) {
      API.defaults.headers.common.authorization = 'Bearer '+ {token};
    } else {
      delete API.defaults.headers.common.authorization;
    }
  }
  //------------------------------------------------------------------------------
  function init() {
    setToken(window.localStorage.getItem("jwt"));
    setToken(window.sessionStorage.getItem("jwt"));
  }
  //-----------------------------------------------------------------------------
  export default  {init, users, posts, auth, setToken };