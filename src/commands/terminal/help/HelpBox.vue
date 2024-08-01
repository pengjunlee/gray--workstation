<template>
  <div>
    <div>💁🏻 🔍 ⭐️ help ⚙ 🧰 🧩 用来查看指定命令的具体用法，如：help search</div>
    <div>命令列表：</div>
    <div v-for="(command, index) in commandList" :key="index">
      <a-row :gutter="18">
        <a-col :span="4">{{ command.func }}</a-col>
        <a-col :span="4">{{command.icon}} {{ command.name }}</a-col>
        <a-col>{{ command.desc }}</a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { commandList } from "../../core/commandRegister";

onMounted(() => {});
</script>

<style scoped></style>
