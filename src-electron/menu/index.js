import { app, Menu, BrowserWindow as bw } from 'electron'
const template = [
  {
    label: 'Help',
    submenu: [
      {
        label: 'About',
        accelerator: 'F1',
        click: () => {
          bw.fromId(1).webContents.send('onResponse', { type: 'about' })
        }
      }
    ]
  }
]
if (process.platform === 'win32') {
  template.unshift({
    label: 'File',
    submenu: [
      {
        label: 'Close',
        accelerator: 'alt+F4',
        role: 'close'
      }
    ]
  })
}

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  })
}

export default Menu.buildFromTemplate(template)
