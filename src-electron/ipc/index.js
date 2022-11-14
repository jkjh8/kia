import { BrowserWindow as bw, ipcMain } from 'electron'
import db from '../db'

import { getSetup, setSetup } from './setupFunctions'
import { getPoweramps, addPoweramp, removePoweramp } from './powerampFunctions'
import { createMulticast } from '../net/multicast'
import { udpSend } from '../net/udp'

let setupValue

ipcMain.on('onRequest', async (e, args) => {
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
      case 'powerAllOn':
        udpSend('*ALL-ON#', setupValue.ipaddress, setupValue.port)
        sendOk()
        break
      case 'powerAllOff':
        udpSend('*ALL-OF#', setupValue.ipaddress, setupValue.port)
        sendOk()
        break
      case 'power':
        udpSend(
          `*${args.value.id < 0 ? args.value.id : '0' + args.value.id}-${
            args.value.status ? 'OF' : 'ON'
          }#`,
          setupValue.ipaddress,
          setupValue.port
        )
        sendOk()
        break
      default:
        console.log(args)
        break
    }
  } catch (e) {
    console.error(e)
  }
})

const sendOk = () => {
  bw.fromId(1).webContents.send('onResponse', {
    type: 'response',
    value: 'ok'
  })
}
