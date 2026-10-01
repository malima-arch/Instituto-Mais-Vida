import { defineConfig } from "vite";
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "html/inde.html",
                cadastro: "html/cadastro.html"
            }
        }
    }
});