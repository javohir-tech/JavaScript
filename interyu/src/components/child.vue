<template>
    <div>
        <button type="button" @click="emit('increment')">+</button>
    </div>
</template>

<script setup>
const emit = defineEmits(['increment'])
</script>

<style scoped>
    
</style>