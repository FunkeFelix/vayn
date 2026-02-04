import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = process.env.VITE_BASE_PATH ?? (repositoryName ? `/${repositoryName}/` : "/");

export default defineConfig(() => ({
  base: basePath,
  server: { host: "::", port: 8080 },
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
