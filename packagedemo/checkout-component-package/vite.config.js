// vite.config.js
import { defineConfig } from "vite";
import babel from '@rollup/plugin-babel';
import react from "@vitejs/plugin-react";
import stringPlugin from "vite-plugin-string";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    stringPlugin({
      include: "**/*.css", // Include only CSS files as raw text
    }),
  ],
  define: {
    // Mock process and process.env for browser compatibility
    'process.env': {},  // Mock process.env
    process: {},  // Polyfill process
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // Ensure CommonJS dependencies are handled
    },
    lib: {
      entry: "src/alokaiCheckoutWebComponent.jsx",
      name: "AlokaiCheckoutWebComponent1",
      fileName: (format) => `alokai-Checkout.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    resolve: {
      alias: {
        '@storefront-ui/react': path.resolve(__dirname, 'node_modules/@storefront-ui/react'),  // Alias Storefront UI components for easier usage
      },
    },
  },
});
