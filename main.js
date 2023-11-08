const { app, BrowserWindow, screen } = require('electron')

const createWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay()
  const { displayWidth, displayHeight } = primaryDisplay.workAreaSize
  const win = new BrowserWindow({
    alwaysOnTop: true,
    frame: true,
    useContentSize: true,
    backgroundColor: "violet",
    width: 400,
    height: 100,
    x: 440,
    y: 0,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})