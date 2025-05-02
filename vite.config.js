import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/digilocker": {
        target: "https://digilocker.meripehchaan.gov.in",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/digilocker/, ""),  // Remove "/api/digilocker"
      },
    },
  },
});


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 8000,  // Set the port to 8000
//     proxy: {
//       "/api/digilocker": {
//         target: "https://digilocker.meripehchaan.gov.in",
//         changeOrigin: true,
//         secure: true,
//         rewrite: (path) => path.replace(/^\/api\/digilocker/, ""),  // Remove "/api/digilocker"
//       },
//     },
//   },
// });
