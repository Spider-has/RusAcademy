
const esbuild = require("esbuild");

const sassPlugin = require('esbuild-sass-plugin').default;


esbuild
    .build({
        entryPoints: ["frontend/app.tsx"], //, "frontend/app.scss"
        outdir: "public/assets",
        bundle: true,
        minify: true,
        plugins: [sassPlugin()],
    })
    .then(() => console.log("Z_Build complete!_Z"))
    .catch(() => process.exit(1))