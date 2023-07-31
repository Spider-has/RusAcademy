
const esbuild = require("esbuild");

const sassPlugin = require('esbuild-sass-plugin').default;


esbuild
    .build({
        entryPoints: ["frontend/index.tsx"], //, "frontend/app.scss"
        outdir: "public/assets",
        bundle: true,
        minify: true,
        plugins: [sassPlugin()],
    loader: {
            '.ttf': 'dataurl',
            '.svg': 'dataurl',
    },
    })
    .then(() => console.log("Z_Build complete!_Z"))
    .catch(() => process.exit(1))