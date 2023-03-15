import { frontendPort } from "./common/index.js";

const config = {
    bundler: {
        entryPoints: [  "frontend/index.ts" ],
        outfile: "dist/index", 
        bundleBrowser: true, 
        bundleHTML: true, 
        minify: !process.env.TAURI_DEBUG ? true : false,
        sourcemap: !!process.env.TAURI_DEBUG,    
     },
    server: { 
        port: frontendPort, 
        hotreload: 3780,
        startpage: "index.html", 
    }
}
export default config;
