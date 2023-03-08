import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // 打包的入口文件
      name: "LazyPictures", // 包名 // formats: ['es', 'umd'], // 打包模式，默认是es和umd都打
      fileName: (format) => `lazy-pictures.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "React",
        },
      },
    },
    outDir: "lib", // 打包后存放的目录文件
  },
});
