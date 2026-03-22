import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserPagesRepo = Boolean(repository?.endsWith(".github.io"));
const base = repository && !isUserPagesRepo ? `/${repository}/` : "/";

export default defineConfig(({ mode }) => ({
  base,

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));