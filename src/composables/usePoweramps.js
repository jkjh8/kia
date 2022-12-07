import { ref } from 'vue'

const poweramps = ref([])
const powerampsStatus = ref([])
const powerAll = ref(0)

const addPoweramp = (args) => {
  FN.onRequest({ command: 'addPoweramp', value: { ...args } })
}

const getPoweramps = () => {
  FN.onRequest({ command: 'getPoweramps' })
}

const removePoweramp = (args) => {
  FN.onRequest({ command: 'removePoweramp', value: args })
}

const changePower = (args) => {
  FN.onRequest({ command: 'power', value: args })
}

const powerStatusAll = (arr) => {
  try {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        count++
      }
    }
    if (arr.length == count) {
      powerAll.value = 2
    } else if (count > 0) powerAll.value = 1
  } catch (e) {
    console.error(e)
  }
}

const chkPowerampsChannels = (arr) => {
  try {
    powerampsStatus.value = new Array(64).fill(0)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].status) {
        powerampsStatus.value[arr[i].id - 1] = 1
      }
    }
  } catch (e) {
    console.error(e)
  }
}

export {
  poweramps,
  powerampsStatus,
  powerAll,
  addPoweramp,
  getPoweramps,
  removePoweramp,
  changePower,
  powerStatusAll,
  chkPowerampsChannels
}
