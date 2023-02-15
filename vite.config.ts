import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'vozyComponents',
      fileName: 'vozy-components'
    }
  },
  plugins: [ dts({ insertTypesEntry: true }) ]
});
