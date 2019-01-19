<template>
  <div>
    <h5>项目经验</h5>
    <project v-for="(item,index) in projects" :key="index" :item="item"></project>
  </div>
</template>
<script>
import mix from './project/index.js'
import data from './project/data.js'

export default {
    mixins: [mix],
    data () {
        return {
            projects: data
        }
    }
}
</script>
