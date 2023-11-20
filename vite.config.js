import { defineConfig } from "vite";

export default defineConfig({
    server: {
        cors: { origin: "*" },
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
