const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const drivelist = require('drivelist')

let file = `file://${process.cwd()}/dist/index.html`
let url = 'http://localhost:8080/'

let window = null

app.on('ready', () => {
  window = new BrowserWindow({width: 800, height: 600})
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'PROD') {
    window.loadURL(file)
  } else {
    window.loadURL(url)
    // Open the DevTools.
    window.webContents.openDevTools()
  }
})
