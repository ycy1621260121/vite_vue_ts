import {getRequest,
postRequest,
putRequest,
deleteRequest} from "@/utils/request"

// 获取seller
// export function getUserInfo(params:any){
//   return service.request({
//     method:'GET',
//     url:'/api/userInfo',
//     data:params
//   })
// }
// export function Login(params:any){
//   return service.request({
//     method:'POST',
//     url:'/api/login',
//     data:params
//   })
// }

// 接口名称
export const _getUserInfo = (params: any) => {
    return getRequest('/get/userInfo', params)
}
// 接口名称
export const _postLogin = (params: any) => {
    return postRequest('/business/v1/auth/login', params)
}
