import service from "@/utils/request"

// 获取seller
export function getUserInfo(params:any){
  return service.request({
    method:'GET',
    url:'/api/userInfo',
    data:params
  })
}
export function Login(params:any){
  return service.request({
    method:'POST',
    url:'/api/login',
    data:params
  })
}