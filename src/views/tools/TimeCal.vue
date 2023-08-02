<template>
    <div class="time-cal">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="">
                <el-time-select v-model="startTime" class="mr-4" placeholder="Start time" start="07:00" step="00:01"
                    end="12:00" format="YYYY-MM-DD HH:mm" />
                <el-time-select v-model="endTime" placeholder="End time" start="18:00" step="00:01" end="23:59"
                    format="YYYY-MM-DD HH:mm" />
            </el-form-item>
            <el-form-item>

                <el-button @click="calTime">计算</el-button>
            </el-form-item>
        </el-form>
        <div class="result">
            <div>两者相差</div>
            <div>分钟数：{{ minNum }}</div>
            <div>
                小时数:{{ hourNum }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const startTime = ref('')
const endTime = ref('')
const minNum = ref('')
const hourNum = ref('')
const calTime = () => {
    console.log(startTime.value, endTime.value);
    if (startTime.value && endTime.value) {
        let d = dayjs(startTime.value)
        let e = dayjs(endTime.value)
        let diff = e.diff(d, 'minute')
        minNum.value = diff + ''
        hourNum.value = (diff / 60) + ''
        console.log(minNum);
    }
}

</script>
<style>
.time-cal {
    padding: 64px;
}

.result {
    padding-top: 32px;
}
</style>