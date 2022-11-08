<script setup>
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

import TooltipDelay from 'src/components/tooltipDelay.vue'

const $r = useRouter()
const $q = useQuasar()

$q.dark.set(true)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
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
        <div class="q-pa-sm q-gutter-x-sm row">
          <q-btn icon="power_settings_new" round flat color="green-8">
            <TooltipDelay msg="ALL POWER"></TooltipDelay>
          </q-btn>

          <q-separator vertical inset />

          <q-btn icon="settings" color="grey-4" round flat>
            <TooltipDelay msg="Setting" />
          </q-btn>

          <q-btn icon="dns" color="grey-4" round flat>
            <TooltipDelay msg="Devices" />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
