import { defineConfig } from "vite";
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "html/index.html",
                cadastro: "html/cadastro.html"
            }
        }
    }
});