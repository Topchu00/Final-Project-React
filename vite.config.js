import react from '@vitejs/plugin-react';
import * as path from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "/src/app/styles/variables.scss" as *;
                    @use "/src/app/styles/global.scss" as *;
                    @use "/src/app/styles/reset.scss" as *;`,
            },
        },
    },
});
