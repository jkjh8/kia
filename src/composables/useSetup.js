import { ref } from 'vue'

const setup = ref({
  ipaddress: '127.0.0.1',
  port: 12302
})

const getSetup = (args) => {
  console.log('getsetup', args)
  try {
    if (Object.keys(args).length) {
      setup.value.ipaddress = args.value.ipaddress
      setup.value.port = args.value.port
    }
  } catch (e) {
    console.error(e)
  }
}

const setSetup = (args) => {
  try {
    if (Object.keys(args).length) {
      console.log(args)
      FN.onRequest({
        command: 'setSetup',
        value: { ipaddress: args.ipaddress, port: Number(args.port) }
      })
    }
  } catch (e) {
    console.error(e)
  }
}

export { setup, getSetup, setSetup }
