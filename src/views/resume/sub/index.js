export default {
    components: {
        baseInfo: () => import('./BaseInfo.vue'),
        projectInfo: () => import('./ProjectInfo.vue'),
        selfSay: () => import('./SelfSay.vue'),
        workInfo: () => import('./WorkInfo.vue')
    }
}
