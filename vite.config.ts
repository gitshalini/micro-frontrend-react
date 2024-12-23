import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
    name:"micro-frontend-react",
    filename: "remoteEntry.js",
    exposes: {
      "./Header": "./src/components/Header.tsx",
      "./Footer": "./src/components/Footer.tsx"
    },
    shared: ["react", "react-dom", "tailwindcss"],
  })
  
  ],
  build: { //If you're developing locally and want remoteEntry.js accessible during development, add build.rollupOptions.output
    target: 'esnext',
    minify: false,
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  },
})
