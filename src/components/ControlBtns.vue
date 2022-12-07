<script setup>
import { useQuasar } from 'quasar'

import { setSetup } from 'src/composables/useSetup.js'
import { addPoweramp, getPoweramps } from 'src/composables/usePoweramps.js'

import TooltipDelay from 'src/components/TooltipDelay.vue'
import SetupDialog from 'src/components/dialogs/setupDialog.vue'
import PowerDialog from 'src/components/dialogs/powerDialog.vue'
import DeviceDialog from 'src/components/dialogs/deviceDialog.vue'

const $q = useQuasar()

const openSetupDialog = () => {
  $q.dialog({
    component: SetupDialog
  }).onOk((v) => {
    console.log(v)
    setSetup(v)
  })
}

const openPowerDialog = () => {
  $q.dialog({
    component: PowerDialog
  }).onOk((v) => {
    console.log(v)
  })
}

const openDeviceDialog = () => {
  $q.dialog({
    component: DeviceDialog
  }).onOk((v) => {
    console.log(v)
    addPoweramp(v)
  })
}

const refreshAll = async () => {
  $q.loading.show()
  await getPoweramps()
}
</script>

<template>
  <div class="q-pa-sm q-gutter-x-sm row">
    <q-btn
      icon="power_settings_new"
      round
      flat
      color="green"
      @click="openPowerDialog"
    >
      <TooltipDelay msg="ALL POWER"></TooltipDelay>
    </q-btn>

    <q-btn icon="tv" round flat to="/video">
      <TooltipDelay msg="VIDEO"></TooltipDelay>
    </q-btn>

    <q-separator vertical inset />

    <q-btn icon="settings" color="grey-4" round flat @click="openSetupDialog">
      <TooltipDelay msg="Setting" />
    </q-btn>

    <q-btn
      icon="add_circle"
      color="grey-4"
      round
      flat
      @click="openDeviceDialog"
    >
      <TooltipDelay msg="Device Add" />
    </q-btn>

    <q-btn icon="refresh" color="grey-4" round flat @click="refreshAll">
      <TooltipDelay msg="Device reload" />
    </q-btn>
  </div>
</template>

<style scoped></style>
