import { BrowserWindow as bw } from 'electron'
import db from '../db'

const getPoweramps = async () => {
  bw.fromId(1).send('onResponse', {
    type: 'poweramps',
    value: await db.find({ type: 'poweramps' }).sort({ id: 1 })
  })
}

const addPoweramp = async (args) => {
  console.log(args)
  await db.insert({ ...args, type: 'poweramps', status: false })
}

const removePoweramp = async (args) => {
  await db.remove({ _id: args._id })
}

const changePowerStatus = async (args) => {
  console.log(args)
}

const sendResponse = () => {
  bw.fromId(1).webContents.send('onResponse', { type: 'response', value: 'ok' })
}

export {
  getPoweramps,
  addPoweramp,
  removePoweramp,
  changePowerStatus,
  sendResponse
}
