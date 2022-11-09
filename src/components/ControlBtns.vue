<script setup>
import { useQuasar } from 'quasar'

import { setSetup } from 'src/composables/useSetup.js'

import TooltipDelay from 'src/components/TooltipDelay.vue'
import SetupDialog from 'src/components/dialogs/setupDialog.vue'

const $q = useQuasar()

const openSetupDialog = () => {
  $q.dialog({
    component: SetupDialog
  }).onOk((v) => {
    console.log(v)
    setSetup(v)
  })
}
</script>

<template>
  <div class="q-pa-sm q-gutter-x-sm row">
    <q-btn icon="power_settings_new" round flat color="green-8">
      <TooltipDelay msg="ALL POWER"></TooltipDelay>
    </q-btn>

    <q-separator vertical inset />

    <q-btn icon="settings" color="grey-4" round flat @click="openSetupDialog">
      <TooltipDelay msg="Setting" />
    </q-btn>

    <q-btn icon="dns" color="grey-4" round flat>
      <TooltipDelay msg="Devices" />
    </q-btn>
  </div>
</template>

<style scoped></style>
