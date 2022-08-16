<template>
  <div>
    <el-button @click="login">Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </div>
</template>

<script lang='ts' setup>
import {onBeforeMount, onMounted} from "vue";
// 接口引入地址
import {_getUserInfo, _postLogin} from "@/api/index";
import {useCounterStore} from "@/store/module/userCount";

const counter = useCounterStore()
counter.count++
// 带自动补全 ✨
counter.$patch({count: counter.count + 1})
// 或使用 action 代替
counter.increment()

onMounted(async () => {
  try {
    let res = await _getUserInfo('');
    console.log('结果', res)
  } catch (e) {
    console.log(e)
  }
})

const login = () => {
  let data = {
    "t": 1660612807882,
    "phone": "10001",
    "password": "8619f636168a2ecca0387cececc994e8c68d4cafeaee9693c743b020fe3fa967",
    "uuid": "29dba581-c089-443b-83ab-3e198b087a4d",
    "captcha": "dkjox"
  }
  let res = _postLogin(data);
  console.log(res)
}

</script>
<style scoped lang='less'>
</style>