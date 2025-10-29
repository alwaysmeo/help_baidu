import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), vueDevTools()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@views': fileURLToPath(new URL('./src/views', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
			'@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				charset: false,
				outputStyle: 'compressed',
				api: 'modern-compiler',
			},
		},
	},
	build: {
		outDir: './dist',
		chunkSizeWarningLimit: 500,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log'],
			},
		},
		cssCodeSplit: true,
		sourcemap: false,
		rollupOptions: {
			output: {
				entryFileNames: 'js/[name].[hash].js',
				chunkFileNames: 'js/[name].[hash].js',
				assetFileNames: '[ext]/[name].[hash].[ext]',
				manualChunks(path) {
					if (path.includes('node_modules')) {
						const match = path.match(/node_modules\/([^/]+)/)
						if (match) return match[1]
					}
				},
			},
		},
	},
	server: {
		host: 'localhost',
		port: 8899,
		open: false,
		hmr: true,
	},
})
