import { app } from 'electron'
import Datastore from 'nedb-promises'

function dbInit(file) {
  const dbPath = app.getPath('userData')
  return new Datastore({
    filename: `${dbPath}/kiapowerampapp/${file}`,
    timestampData: true,
    autoload: true
  })
}

const db = {
  list: dbInit('poweramps'),
  setup: dbInit('setup')
}

export default db
