import { defineConfig } from "vite";

export default defineConfig({
    base: "/boltz-webapp-embed/",
    server: {
        cors: { origin: "*" },
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
