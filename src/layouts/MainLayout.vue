<script setup></script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black">
      <q-toolbar>
        <div class="q-pa-sm">
          <q-img src="logo_2021.png" width="80px" />
        </div>

        <div class="row justify-start content-start">KIA</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
