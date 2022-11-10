import { BrowserWindow, ipcMain } from 'electron'
import db from '../db'

import { getPoweramps, addPoweramp, removePoweramp } from './powerampFunctions'
import { createMulticast } from '../net/multicast'

ipcMain.on('onRequest', async (e, args) => {
  const mw = BrowserWindow.fromId(1)
  try {
    switch (args.command) {
      case 'started':
        getPoweramps()
        mw.webContents.send('onResponse', {
          type: 'setup',
          value: await db.findOne({ type: 'setup' })
        })
        // createMulticast()
        break
      case 'setSetup':
        await db.update(
          { type: 'setup' },
          { $set: { value: args.value } },
          { upsert: true }
        )
        break
      case 'getSetup':
        mw.webContents.send('onResponse', {
          type: 'setup',
          value: await db.findOne({ type: 'setup' })
        })
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
      default:
        console.log(args)
        break
    }
  } catch (e) {
    console.error(e)
  }
})
