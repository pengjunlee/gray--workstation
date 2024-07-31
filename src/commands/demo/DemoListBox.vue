<template>
  <div>
    <ul>
      <li v-for="(demo, index) in demos" :key="index">
        【 {{ index + 1 }} 】 {{ demo.name }}：{{ demo.desc }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  demos: DemoType[];
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
