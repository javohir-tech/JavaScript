<template>
  <p>Jami {{ natija }}</p>
  <!-- <form @submit.prevent="handlePrice"> -->
    <input v-model="price" type="number"></input>
  <!-- </form> -->
  <Child @increment="handleIncrement"/>
</template>
<script setup>
import { computed, ref, watch } from 'vue';
import Child from './components/child.vue';

const price = ref(100)
const quantity = ref(3)

const natija = computed(() => {
  return price.value * quantity.value
})

const handleIncrement = () => {
  quantity.value++
}

watch(natija , (newVal)=>{
  console.log(newVal)
})

</script>

<style scoped></style>