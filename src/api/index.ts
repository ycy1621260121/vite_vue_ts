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

// 用户信息接口
export const _getUserInfo = (params: any) => {
    return getRequest('/business/v1/auth/userMenus?t=1660612807956&menuId=1&roleId=14', params)
}
// 登录接口
export const _postLogin = (params: any) => {
    return postRequest('/business/v1/auth/login', params)
}
