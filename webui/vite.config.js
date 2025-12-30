import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from 'vite-plugin-singlefile'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [svelte(), viteSingleFile(), tailwindcss()],
    build: {
        cssCodeSplit: false,
        assetsInlineLimit: 100000000
    }
})