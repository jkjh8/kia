<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

import { getSetup } from 'src/composables/useSetup'

import ControlBtns from 'src/components/ControlBtns.vue'

const $r = useRouter()
const $q = useQuasar()

onMounted(() => {
  FN.onResponse((args) => {
    switch (args.type) {
      case 'setup':
        getSetup(args.value)
        break
      case 'poweramps':
        break
      default:
        console.log('args')
        break
    }
  })

  FN.onRequest({ command: 'started' })
})

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
          <div>
            <div class="header-font">전원 제어</div>
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
