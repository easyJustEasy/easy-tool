<template>
  <section class="project-item">
    <div>
      <span class="item-title">{{item.title}}</span>
      <small class="ml-2">{{item.startDate}}~{{item.endDate}}</small>
    </div>
    <div class="desc-info" v-html="item.desc"></div>
  </section>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: function () {
                return {}
            }
        }
    }
}
</script>

<style lang="less" scoped>
.project-item {
  margin: 16px 0;
  line-height: 2;
  .item-title {
    font-size: 16px;
    color: #333;
  }
  .desc-info {
    width: 60%;
    font-size:14px;
  }
}
</style>
