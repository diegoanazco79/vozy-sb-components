import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vozy-components',
      fileName: 'vozy-components'
    }
  },
  plugins: [ dts({ insertTypesEntry: true }) ]
});
