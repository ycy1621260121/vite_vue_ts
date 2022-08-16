import axios from 'axios'


// 统一请求路径前缀
let base = '/api';
//console.log(process.env)
// 接口环境地址
//let API_ROOT = process.env.API_ROOT

// 创建axios
const service = axios.create({
  // baseURL: '/api',
  //baseURL: 'http://xxx.xxx.xx.xxx',
    withCredentials: true,
  timeout:15000
});

// 添加请求拦截器
service.interceptors.request.use(
  (config:any) => {
    let token:string ='WEB|eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJhdmF0YXJcIjpcImh0dHA6Ly9jaHVuZW5nLWRldi5vc3MtY24tc2hlbnpoZW4uYWxpeXVuY3MuY29tL2J1c2luZXNzL3Vzci9hdmF0YXIvMTAwMDFcIixcImJyYW5kSWRcIjoxMDEsXCJtZW51SWRzXCI6WzEsNjY4LDEyNzJdLFwicGhvbmVcIjpcIjEwMDAxXCIsXCJwcm9qZWN0SWRcIjoxMDEsXCJyZWFsTmFtZVwiOlwi6L-Q6JClXCIsXCJyZWFsbmFtZVwiOlwi6L-Q6JClXCIsXCJyb2xlSWRcIjoxNCxcInNob3BzXCI6W10sXCJzeXNDaGFubmVsXCI6XCJXRUJcIixcInN5c0NvZGVcIjpcIjAwMDAxMTExXCIsXCJ1c2VySWRcIjo5NzIxLFwidXNlclR5cGVcIjoxfSIsImlhdCI6MTY2MDYxMjgwNywiZXhwIjoxNjYwNjk5MjA3fQ.w5vj2fyaZmzQcwucDDKi24-VsIsN4FKaL49xGrpIGW-conx82YoO03zHTMbUNP7qFW8zP3cT0bBmolp2geEYsA'//此处换成自己获取回来的token，通常存在在cookie或者store里面
    if (token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['token'] = token

      config.headers.Authorization =  + token
     }
    return config
  },
  error => {
    // Do something with request error
    console.log("出错啦", error) // for debug
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response:any) => {
   const data = response.data;
    // 根据返回的code值来做不同的处理(和后端约定)
    switch (data.code) {
        case 210:
            console.log(data.message);
            break;
        // 错误
        case 500:
            console.log("联系管理员");
            break;
        default:
            return data;
    }
    return data;
 },    /*  */
 error => {
   console.log('err' + error) // for debug
   if(error.response.status == 403){
     // ElMessage.error('错了')
     console.log('没有权限');

   }else{
     // ElMessage.error('服务器请求错误，请稍后再试')
     console.log('服务器请求错误，请稍后再试');
   }
   return Promise.reject(error)
 }
)
export default service;

// get 请求
export const getRequest = (url: string, params: any) => {
    let accessToken = '';
    return service({
        method: 'get',
        url: `${base}${url}`,
        params: params,
        headers: {
            'accessToken': accessToken
        }
    });
};

// post请求
export const postRequest = (url: string, params: any) => {
    let accessToken = '';
    return service({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': accessToken
        }
    });
};

export const putRequest = (url: string, params: any) => {
    let accessToken = '';
    return service({
        method: 'put',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': accessToken
        }
    });
};

export const deleteRequest = (url: string, params: any) => {
    let accessToken = '';
    return service({
        method: 'delete',
        url: `${base}${url}`,
        params: params,
        headers: {
           'accessToken': accessToken
        }
    });
};

/**
 * 无需token验证的请求 避免旧token过期导致请求失败
 * @param {*} url
 * @param {*} params
 */
export const getRequestWithNoToken = (url: string, params: any) => {
    return service({
        method: 'get',
        url: `${base}${url}`,
        params: params
    });
};