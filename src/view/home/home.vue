<template>
  <div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </div>
</template>

<script lang='ts' setup>
import { onBeforeMount, onMounted } from "vue";
// 接口引入地址
import { getUserInfo } from "@/api/index";
import { useCounterStore } from "@/store/module/userCount";

const counter = useCounterStore()
counter.count++
// 带自动补全 ✨
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()

onMounted(async () => {
  try {
    let res = await getUserInfo('');
    console.log('结果', res)
  } catch (e) {
    console.log(e)
  }
})

</script>
<style scoped lang='less'>
</style>