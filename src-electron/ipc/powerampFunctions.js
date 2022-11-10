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
  await db.insert({ ...args, type: 'poweramps' })
}

const removePoweramp = async (args) => {
  await db.remove({ _id: args._id })
}

export { getPoweramps, addPoweramp, removePoweramp }
