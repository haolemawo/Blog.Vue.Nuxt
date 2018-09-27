import Axios from "axios";
import config from "~/config";
import store from "~/store";


const http = Axios.create({
    baseURL: config.api,
    timeout: 8000,
    validateStatus: function (status) {
        return status >= 200;
    }
});

function LogicError (message, code, data) {
    this.message = message;
    this.code = code;
    this.data = data;
    this.name = "LogicError";
}

LogicError.prototype = new Error();
LogicError.prototype.constructor = LogicError;

  // http.interceptors.request.use((data, headers) => {
  //     return data;
  // });

 //http request 拦截器
  http.interceptors.request.use(
    config => {
      try {
        if (window.localStorage.Token&&window.localStorage.Token.length>=128) {//store.state.token 获取不到值
          config.headers.Authorization = window.localStorage.Token;
        }
      }catch (e) {
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

http.interceptors.response.use(response => {
    const data = response.data;
    switch (data.success) {
        case true:
            return data.data;
        default:
            throw new LogicError(data.msg);
    }
}, err => {
    throw new LogicError("网络请求错误");
});

export default http;
