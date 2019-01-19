<template>
  <div class="p-2">
    <base-info></base-info>
    <self-say></self-say>
    <project-info></project-info>
  </div>
</template>
<script>
import mix from './sub/index.js'
export default {
    mixins: [mix]
}
</script>
