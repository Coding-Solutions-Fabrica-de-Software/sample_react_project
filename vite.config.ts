import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import envCompatible from 'vite-plugin-env-compatible';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [react(), tsconfigPaths(), envCompatible()],
  // resolve: {
  //   alias: [
  //     { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
  //     { find: '@functions', replacement: path.resolve(__dirname, 'src/_functions') },
  //   ],
  // },
})
