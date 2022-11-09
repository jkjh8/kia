import { BrowserWindow } from 'electron'
import dgram from 'dgram'

let multicast = null
const maddr = '230.185.185.112'
const server_port = 56432
const client_port = 56431

function createMulticast() {
  return new Promise((resolve, reject) => {
    try {
      const timeout = setTimeout(() => {
        reject('connection timeout')
      }, 5000)

      const multicast = dgram.createSocket('udp4')
      multicast.bind(server_port, () => {
        multicast.setBroadcast(true)
        multicast.setMulticastTTL(128)
        multicast.addMembership(maddr)
        clearTimeout(timeout)
      })

      multicast.on('listening', () => {
        const address = multicast.address()
        console.log(`Multicast listening at ${address.address}:${address.port}`)
      })

      multicast.on('message', (msg) => {
        console.log(msg)
      })

      multicast.on('error', (err) => {
        console.error(`Multicast Error: ${err.stack}`)
        multicast.close()
        multicast = null
      })
    } catch (e) {
      reject(e)
    }
  })
}

const multicastSender = (msg) => {
  try {
    if (multicast) {
      multicast.send(JSON.stringify(message), client_port, maddr)
    } else {
      console.log('Multicast not available')
    }
  } catch (e) {
    console.error('Multicast send Error', e)
  }
}

export { multicast, createMulticast, multicastSender }
