const {app, BrowserWindow } =  require('electron')
const path = require('path')


let win

function createWindow(){
    win =  new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences : {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        },
        show: false
    })
    win.loadFile("index.html")
    win.on('closed',() => {
        win = null
    })
    win.setMenu(null)
    //win.webContents.openDevTools()
    win.once('ready-to-show', () => {
        win.show()
      })
}
app.on('ready', createWindow)


app.on('window-all-closed',() => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})


app.on('activate',() => {
    if(win ===  null){
        createWindow()
    }
})

