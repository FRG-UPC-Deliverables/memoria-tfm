const {BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

/** ... **/

let win

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Emitted when the window is closed.
    win.on('closed', () => {
        /** ... **/
        win = null
    })
}
/** ... **/
