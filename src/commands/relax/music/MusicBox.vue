<template>
  <div>
    <iframe
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="330"
      height="86"
      src="//music.163.com/outchain/player?type=2&id=150422&auto=1&height=66"
    ></iframe>
    <div v-if="errorHint">{{ errorHint }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";

interface MusicBoxProps {
  name: string;
}

const props = withDefaults(defineProps<MusicBoxProps>(), {});
const { name } = toRefs(props);
const musicPath = ref("");
const errorHint = ref("");

onMounted(async () => {
  // 搜索音乐，返回 id
  // const res: any = await getSingleMusic(name.value);
  // if (res?.code === 20000) {
  //   const music = res.data;
  //   musicPath.value = `https://music.163.com/song/media/outer/url?id=2166485129`;
  // } else {
  //   errorHint.value = "未找到音乐";
  // }
  musicPath.value = `https://music.163.com/song/media/outer/url?id=2166485129`;
});
</script>

<style scoped></style>
