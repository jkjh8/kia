<script setup>
import { useRouter } from 'vue-router'
import TooltipDelay from 'src/components/tooltipDelay.vue'

const router = useRouter()
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black">
      <q-toolbar class="row justify-between">
        <div class="q-pa-sm">
          <q-img
            class="pointer"
            src="logo_2021.png"
            width="80px"
            @click="router.push('/')"
          />
        </div>
        <div class="q-pa-sm q-gutter-x-sm row">
          <q-btn icon="power_settings_new" round flat color="green-10">
            <TooltipDelay msg="ALL POWER"></TooltipDelay>
          </q-btn>

          <q-separator vertical inset />

          <q-btn icon="settings" color="grey-8" round flat>
            <TooltipDelay msg="Setting" />
          </q-btn>

          <q-btn icon="dns" color="grey-8" round flat>
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
