console.log("Hello electron");
//modules needed for a basic etrn app
const electron = require("electron");
//submodules from elctrn
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;//create and control windows

const path=require("path");
const url=require("url");

let win;
function createWindow(){
	win=new BrowserWindow();
	//loading html to the window
	win.loadURL(url.format({
		pathname:path.join(__dirname,'index.html'),
		protocol:'file',
		slashes:true
	}));
	win.on('closed',()=>{
		win=null;
	})
}
app.on('ready',createWindow);