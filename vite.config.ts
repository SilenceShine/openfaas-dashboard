/** vite.config.ts */

import { defineConfig } from 'vite';
import path from 'path'
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'                      // 自动导入
import Components from 'unplugin-vue-components/vite'                   // 组件注册
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 组件
import Icons from 'unplugin-icons/vite' // icon
import IconsResolver from 'unplugin-icons/resolver' // icon
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 这里更改打包相对绝对路径
  server: {
    open: true,
    hmr: true,
    port: 8010,
    host: '0.0.0.0',
    // https:true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 构建输出配置
  // build: {
  //   outDir: './dist',
  //   target: 'modules',
  //   assetsDir: 'assets',
  //   assetsInlineLimit: 360000,
  // },
  plugins: [
    vue(),
    ElementPlus({
      // options
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json"
      },
      resolvers: [
        ElementPlusResolver({ importStyle: false }),
        IconsResolver({
          prefix: "Icons"
        })
      ],
      imports: [
        "vue",
        "vuex",
      ],
      dts: 'src/auto/auto-imports.d.ts',
    }),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ['src/components', 'src/**/components',],
      extensions: ['vue', 'jsx', 'tsx', 'ts', 'js'],
      resolvers: [
        ElementPlusResolver({ importStyle: false }),
        IconsResolver({
          enabledCollections: ['ep']
        })
      ],
      dts: 'src/auto/components.d.ts',
    }),
    Icons({
      autoInstall: true
    })
  ],
});

