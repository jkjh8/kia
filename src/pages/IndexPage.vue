<script setup>
import { poweramps } from 'src/composables/usePoweramps'
</script>

<template>
  <q-page class="q-pa-md">
    <q-table
      :columns="[
        {
          name: 'id',
          align: 'center',
          label: 'ID',
          field: 'ID',
          sortable: true
        },
        {
          name: 'name',
          align: 'center',
          label: 'NAME',
          field: 'name',
          sortable: true
        },
        {
          name: 'status',
          align: 'center',
          label: 'STATUS',
          field: 'status',
          sortable: true
        },
        {
          name: 'actions',
          align: 'center',
          label: 'ACTIONS'
        }
      ]"
      :rows="poweramps"
      row-key="id"
      :pagination="{
        rowsPerPage: 0
      }"
    ></q-table>
  </q-page>
</template>
