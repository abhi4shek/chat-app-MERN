import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server:{
    port: 8000,
    proxy: {
      "/api": {
        target: "https://chat-app-mern-nawb.onrender.com",
         ws: true,
      },
    },
  },

});
