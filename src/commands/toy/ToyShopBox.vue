<template>
  <div>
    <ul>
      <li v-for="(toy, index) in toys" :key="index">
        【 {{ index + 1 }} 】 {{ toy.name }}：{{ toy.desc }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  toys: ToyType[];
}

// 定义 props
const props = defineProps<Props>();
</script>

<style scoped>
li {
  list-style-type: none;
  padding: 8px;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border-bottom: none;
}
</style>
