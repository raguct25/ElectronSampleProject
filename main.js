const { app, BrowserWindow } = require("electron");

let indexWindow;

//brwoser window
function createWindow() {
  indexWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
    // frame: false,
  });
  indexWindow.loadFile("./index.html");
}

//normal declaration
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
