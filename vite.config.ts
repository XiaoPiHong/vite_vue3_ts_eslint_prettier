import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: true,
      // 对于大于1m的文件才进行压缩
      // threshold:1024000,
      algorithm: 'gzip',
      ext: 'gz',
    }),
    // #========gzip start
    // # gzip
    // # 开启gzip
    // gzip on;
    // # 开启gzip静态压缩功能
    // gzip_static on;
    // # gzip缓存大小
    // gzip_buffers 4 16k;
    // # gzip http版本
    // gzip_http_version 1.1;
    // # gzip压缩级别 1-10
    // gzip_comp_level 5;
    // # gzip压缩类型
    // gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    // # 是否在http header中添加Vary: Accept-Encoding，建议开启
    // gzip_vary on;
    // #========gzip end
    eslintPlugin(),
    StylelintPlugin({ fix: true }),
  ],
  server: {
    host: 'localhost',
    port: 9999,
    open: true,
  },
})
