<template>
  <div class="my-index">
    <div class="easy-container">
      <div class="easy-row">
        <div class="easy-col" v-for="(itm, index) in data" :key="index">
          <div class="easy-card">
            <router-link :to="{ path: itm.url }">
              <img
                :src="itm.img"
                class="card-img-top"
                :alt="itm.name"
                width="286"
                height="142"
              />
              <p class="card-text text-center">{{ itm.name }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/bg.jpeg" alt="" class="bg">
  </div>
</template>

<script>
export default {
    data () {
        return {
            data: [
                //     {
                //         name: '我的简历',
                //         url: '/res',
                //         img:
                // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547877282722&di=5d050c0cb3686a825fcad3c9b67a359a&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fe4dde71190ef76c6d1d9c6a49016fdfaaf516731.jpg'
                //     },
                {
                    name: 'json',
                    url: '/file',
                    img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547877667891&di=9382078ec25a574b0d0a57b412455d60&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0b55b319ebc4b74560464f9cc2fc1e178b82156d.jpg'
                },
                {
                    name: '解析Excel',
                    url: '/excel',
                    img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547877667887&di=dcd77db39b2c4b60a505cfb0419546bc&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb8389b504fc2d5622e4d2b67ea1190ef77c66cf7.jpg'
                },
                {
                    name: 'json转excel',
                    url: '/toExcel',
                    img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547877667883&di=da287573214a3f77901707858711c30a&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa5c27d1ed21b0ef4e2a263d4d0c451da80cb3ef6.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.bg{
  position: fixed;
  top:0;
  left: 0;
  z-index: -1;
  width:100%;
  height: 100%;
}
.easy-container {

  padding: 4rem;
  .easy-row {
    display: flex;
    .easy-col {
      .easy-card {
        width: 18rem;
        position: relative;
        .card-text {
          position: absolute;
          top: 30%;
          font-size: 2rem;
          color: #fff;
          left: 25%;

        }
         &:hover{
            opacity: .8;
          }
      }
    }
  }
}
</style>
