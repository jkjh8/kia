import { BrowserWindow, ipcMain } from 'electron'
import db from '../db'

import { getSetup, setSetup } from './setupFunctions'
import { getPoweramps, addPoweramp, removePoweramp } from './powerampFunctions'
import { createMulticast } from '../net/multicast'

let setupValue

ipcMain.on('onRequest', async (e, args) => {
  const mw = BrowserWindow.fromId(1)
  try {
    switch (args.command) {
      case 'started':
        getPoweramps()
        setupValue = await getSetup()
        console.log(setupValue)
        createMulticast()
        break
      case 'setSetup':
        setSetup(args.value)
        break
      case 'getSetup':
        setupValue = await getSetup()
        break
      case 'getPoweramps':
        getPoweramps()
        break

      case 'addPoweramp':
        await addPoweramp(args.value)
        getPoweramps()
        break
      case 'removePoweramp':
        await removePoweramp(args.value)
        getPoweramps()
        break
      case 'power':
        console.log(args.value)
        mw.webContents.send('onResponse', {
          type: 'response',
          value: 'ok'
        })
        break
      default:
        console.log(args)
        break
    }
  } catch (e) {
    console.error(e)
  }
})
