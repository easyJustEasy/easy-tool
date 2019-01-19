<template>
  <section class="person-info">
    <div class="media">
      <img
        src="https://mypics.zhaopin.cn//pic/2014/10/22/04e67619-afbd-40ff-8dd1-1c2dcf2bfd6c.jpg"
        class="mr-3 touxiang"
        alt="头像"
        v-animate-css.hover="'rotateIn'"
      >
      <div class="media-body">
        <h5 class="mt-0" >朱思远</h5>
        <p>智联招聘 / 高级研发</p>
        <p>7年工作经验  / 30岁</p>
        <p>18500237921 zhusiyuanhao@163.com</p>
      </div>
    </div>
  </section>
</template>
<style lang="less">
.touxiang {
  width: 119px;
  height: 119px;
}
</style>
