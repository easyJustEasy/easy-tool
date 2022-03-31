<template>
  <div class="my-index">
    <el-row>
      <router-link
        :to="{ path: itm.url }"
        v-for="(itm, index) in data"
        :key="index"
      >
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="itm.name"
          placement="bottom-start"
        >
          <el-button size="large" :type="itm.type || 'primary'" :icon="itm.icon" circle  class="function-item"/>
        </el-tooltip>
      </router-link>
    </el-row>
  </div>
</template>

<script>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
export default {
  data() {
    return {
      data: [
        //     {
        //         name: '我的简历',
        //         url: '/res'  },
        {
          type: "primary",
          name: "json",
          url: "/file",
          icon: Check,
        },
        { type: "success", name: "解析Excel", url: "/excel", icon: Edit },
        {
          type: "warning",
          name: "json转excel",
          url: "/toExcel",
          icon: Message,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.my-index{
  background-color:#333!important;
  padding:32px;
  width:100%;
  min-height: 1024px;
}
.function-item{
  margin-right: 16px;
}
</style>
