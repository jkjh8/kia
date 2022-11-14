import dgram from 'dgram'

const udpSend = (msg, host, port) => {
  return new Promise((resolve, reject) => {
    try {
      const udpSender = dgram.createSocket('udp4')
      udpSender.send(msg, port, host, (err) => {
        if (err) return reject(err)
        udpSender.close()
        resolve()
      })
    } catch (e) {
      console.error(e)
    }
  })
}

export { udpSend }
