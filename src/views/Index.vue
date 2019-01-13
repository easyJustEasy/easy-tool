<style lang="less">
.my-index {
  padding: 64px;
  ul {
    li {
      float: left;
      width: 200px;
      margin-left: 8px;
    }
  }
}
</style>

<template>
  <div class="my-index">
    <ul>
      <li v-for="(itm,index) in data" :key="index">
        <router-link :to="{ path:itm.url }">
          <b-button variant="primary">{{itm.name}}</b-button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          name: '上线文件',
          url: '/file'
        },
        {
          name: '解析Excel',
          url: '/excel'
        },
        {
          name: 'json转excel',
          url: '/toExcel'
        }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>
