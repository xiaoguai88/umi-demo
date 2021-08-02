import axios from 'axios'

const service = axios.create()
// get请求
export const getHomeInfo = (params) => {
    return service("/api/home", {
      params,
    });
  };
  // post请求
export const getInfoByPost = (params) => {
    return service("/api/getData", {
      method: "post",
      data: { ...params },
    });
  };