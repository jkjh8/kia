import { BrowserWindow as bw } from 'electron'
import db from '../db'

const getSetup = async () => {
  const setupValues = await db.findOne({ type: 'setup' })
  bw.fromId(1).webContents.send('onResponse', {
    type: 'setup',
    value: setupValues
  })
  return setupValues
}

const setSetup = async (args) => {
  await db.update({ type: 'setup' }, { $set: { ...args } }, { upsert: true })
}

export { getSetup, setSetup }
