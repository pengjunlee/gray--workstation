import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import Components from "unplugin-vue-components/vite";
// @ts-ignore
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// @ts-ignore
import { chromeExtension } from "./build/chromeExtension";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // 输出目录
    assetsDir: "assets", // 静态资源目录
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
  base: "./", // 设置项目的根路径
  // 服务端渲染
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 3001,
    host: "0.0.0.0",
    // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
    proxy: {
      // 第一个代理后端地址
      "^/gray-api": {
        target: "http://localhost:8081",
        // target: "http://192.168.2.2:8091",
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
  plugins: [
    vue(),
    // 按需加载 ant-design-vue
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    process.env.BUILD_CRX && chromeExtension(),
  ].filter(Boolean),
});
