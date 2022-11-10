import { ref } from 'vue'

const poweramps = ref([])

const addPoweramp = (args) => {
  console.log(args)
  FN.onRequest({ command: 'addPoweramp', value: { ...args } })
}

const getPoweramps = () => {
  FN.onRequest({ command: 'getPoweramps' })
}

const removePoweramp = (args) => {
  FN.onRequest({ command: 'removePoweramp', value: args })
}

export { poweramps, addPoweramp, getPoweramps, removePoweramp }
