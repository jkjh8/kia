import { ipcMain } from 'electron'
import db from '../db'

ipcMain.on('onRequest', async (e, args) => {
  try {
    switch (args.command) {
      default:
        console.log(args)
        break
    }
  } catch (e) {
    console.error(e)
  }
})
