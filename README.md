# cross-platform-app
This repository is a **template repo** for using a single repo structure for creating a traditional hosted web app, desktop app with [Tauri], and Android/IOS mobile app with [Capacitor]. 

It also contains some test code for linking a separate node server to the tauri application, for running nodejs in parallel with the desktop app.

## Contributing
### Repo Structure
- `frontend` - The frontend code for the app
- `src-tauri` - The [Tauri] source files
- `capacitor.config.js` - The [Capacitor] configuration file
- `backend` - The backend code for the app, an example for serving a node server in a tauri webview application.

### Building

#### Web (server hosted)

Development server: `npm run app:dev`

Or: bundle & serve with `tinybuild`, which by default runs a hot-reloading development server for quick testing. `tinybuild build` will just run the bundler step, or set server:false in `tinybuild.config.js`

Then in production, simply serve the index.html in this repository. and it will link the bundled file. Tinybuild includes instructions to quickly serve an https server if you don't have your own solution. 

#### Desktop (Windows / Mac / Linux)
Ensure that the [Tauri] CLI is installed by running `npm i`.

You must also ensure that both [Microsoft Visual Studio C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/), [WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section) (if below Windows 10 / 11), and [Rust](https://www.rust-lang.org/tools/install).

After this, you can run `npm run tauri dev` to run the app in development mode. This will open a window with the app running in it. 

You can also run `npm run tauri build` to build the app for your current platform.

#### Mobile (Android / IOS)
Ensure that [Capacitor] is installed by running `npm i`.

##### Android
1. Install Android Studio
2. Create a new project in Android Studio
    - `npm run init:android` (will run `npx cap add android`, `npx cap copy`)
3. Open the project in Android Studio
    - `npm run android` (will run `npx cap open android`)


The first run will likely need to install all of the tools in the android project necessary. Build the android project in Android Studio after running these commands by clicking the Make Project hammer icon if it doesn't start automatically. Then if you see BUILD SUCCESSFUL, run with your android device connected or the built-in android emulators active.

##### IOS 
1. Install XCode
2. Install cocoapods (if required)
3. Create a new project in XCode
    - `npm run init:ios` (will run `npx cap add ios`, `npx cap copy`)
4. Open the project in XCode
    - `npm run ios` (will run `npx cap open ios`)


[Capacitor]: https://capacitorjs.com/
[Tauri]: https://tauri.app/
