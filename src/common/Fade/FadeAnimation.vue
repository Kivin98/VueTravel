<template>
    <transition>
        <slot></slot>
    </transition>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="stylus">
    .v-enter , .v-leave-to
        opacity 0
    .v-enter-active , .v-leave-active
        transition opacity 0.3s
</style>
