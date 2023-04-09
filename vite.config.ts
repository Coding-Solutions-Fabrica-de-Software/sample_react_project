import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/Components') },
      { find: '@redux/*', replacement: path.resolve(__dirname, 'src/Redux/*') },
      { find: '@redux', replacement: path.resolve(__dirname, 'src/Redux') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/Features') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/Pages') },
      { find: '@data/*', replacement: path.resolve(__dirname, 'src/Data/*') },
    ],
  },
})
