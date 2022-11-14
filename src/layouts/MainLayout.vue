<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

import { getSetup } from 'src/composables/useSetup'
import {
  poweramps,
  powerampsStatus,
  powerAll,
  powerStatusAll,
  chkPowerampsChannels
} from 'src/composables/usePoweramps'

import ControlBtns from 'src/components/ControlBtns.vue'
import AboutWindow from 'src/components/dialogs/aboutDialog.vue'

const $r = useRouter()
const $q = useQuasar()

onMounted(() => {
  FN.onResponse((args) => {
    switch (args.type) {
      case 'setup':
        getSetup(args.value)
        break
      case 'poweramps':
        console.log(args.value)
        poweramps.value = args.value
        chkPowerampsChannels(poweramps.value)
        powerStatusAll(powerampsStatus.value)
        break
      case 'response':
        console.log(args.value)
        break
      case 'powerStatusRefresh':
        FN.onRequest({ command: 'getPoweramps' })
        powerStatusAll(args.value.power)
        break
      case 'about':
        $q.dialog({
          component: AboutWindow
        })
        break
      default:
        console.log(args)
        break
    }
    $q.loading.hide()
  })

  FN.onRequest({ command: 'started' })
})

const selColor = (num) => {
  if (num === 0) {
    return 'red'
  } else if (num === 1) {
    return 'yellow'
  } else {
    return 'green'
  }
}

$q.dark.set(true)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <!-- header -->
    <q-header class="text-grey-2" style="background: #00000000">
      <q-toolbar class="row justify-between">
        <div class="q-pa-sm q-gutter-x-md row items-center">
          <q-avatar class="pointer" size="60px" @click="$r.push('/')">
            <img src="logo_black.jpeg" />
          </q-avatar>
          <div class="row justify-start">
            <div class="header-font">
              전원 제어
              <q-badge rounded :color="selColor(powerAll)"></q-badge>
            </div>
          </div>
        </div>
        <!-- control buttons -->
        <ControlBtns />
      </q-toolbar>
    </q-header>

    <!-- body -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
